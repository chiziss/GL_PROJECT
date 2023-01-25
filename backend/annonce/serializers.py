# import serializers from the REST framework
from rest_framework import serializers
from .models import Annonces
class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        lookup_field = 'slug'
        model = Annonces
        fields = '__all__'
    

#class AnnonceFavorie(serializers.ModelSerializer):
 #   favorie = True
 #   Annonces.set_favorie(favorie)
  #  Annonces.save()

#class AnnonceHistory(serializers.ModelSerializer):
 #   history = True
    #Annonces.set_historique(history)
    #Annonces.save()