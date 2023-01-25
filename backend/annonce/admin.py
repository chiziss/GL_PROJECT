from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import Annonces

class AnnoncesAdmin(SummernoteModelAdmin):
    exclude = ('slug', )
    list_display = ('id',)
    list_display_links = ('id',)
    search_fields = ('modalite','date','category','theme','lieu.wilaya','lieu.commun' )
    list_per_page = 36
    summernote_fields = ('description', )

admin.site.register(Annonces, AnnoncesAdmin)