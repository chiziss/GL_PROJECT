from django.db import models
from account.models import User
from datetime import datetime
from django.template.defaultfilters import slugify

class Category(models.TextChoices):
    PRIMARY='primary school',
    MIDDLE='middle school',
    SECONDARY='secondary school',
    TERTIARY='tertiary education'
    
class Lieu(models.Model):
    wilaya=models.CharField(max_length=50),
    commune=models.CharField(max_length=50)

class Theme(models.TextChoices):
    MATH='math'
    PHYS='phys'

class Modalite(models.TextChoices):
    ONLINE='online'
    OFFLINE='offline'

class Annonces(models.Model):
    title=models.CharField(),
    slug = models.SlugField(),
    annonceur=models.ForeignKey(User, on_delete=models.CASCADE),
    date=models.DateTimeField(default=datetime.now, blank=True),
    photo = models.ImageField(upload_to='images/%y/%m/%d/'),
    category =models.CharField(choices=Category.choices),
    theme=models.CharField(choices=Theme.choices),
    modalite=models.CharField(choices=Modalite.choices),
    description=models.TextField(),
    lieu=models.OneToOneField(Lieu,on_delete=models.CASCADE),
    tarif=models.BigIntegerField(),
    favorie=models.BooleanField(default=False),
    historique=models.BooleanField(default=False),

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = Annonces.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = Annonces.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.favorie:
            try:
                temp = Annonces.objects.get(favorie=True)
                if self != temp:
                    temp.favorie = False
                    temp.save()
            except Annonces.DoesNotExist:
                pass
        if self.historique:
            try:
                temp = Annonces.objects.get(historique=True)
                if self != temp:
                    temp.historique= False
                    temp.save()
            except Annonces.DoesNotExist:
                pass
        
        super(Annonces, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

    
    

class Commentaires(models.Model):
    user=models.ForeignKey(User, on_delete=models.CASCADE),
    annonce=models.ForeignKey(Annonces, on_delete=models.CASCADE),
    content=models.TextField(),
    date=models.DateTimeField(default=datetime.now, blank=True),