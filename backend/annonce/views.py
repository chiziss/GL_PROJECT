from django.shortcuts import render
 
# import view sets from the REST framework
from rest_framework import viewsets
 
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Annonces
from .serializers import AnnonceSerializer
from rest_framework.permissions import IsAuthenticated

class AnnonceListView(ListAPIView):
    queryset = Annonces.objects.order_by('-id')
    serializer_class = AnnonceSerializer
    lookup_field = 'slug'
    permission_classes = [IsAuthenticated]

class AnnonceDetailView(RetrieveAPIView):
    queryset = Annonces.objects.order_by('-id')
    serializer_class = AnnonceSerializer
    lookup_field = 'slug'
    permission_classes = [IsAuthenticated]

# get favorie
class AnnonceFavorieView(ListAPIView):
    serializer_class = AnnonceSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'slug'
    def get(self, request, format=None):
        queryset = Annonces.objects.all().filter(favorie=True,annonceur=request.user)
        serializer = AnnonceSerializer(queryset, many=True)
        return Response(serializer.data)

# get history
class AnnonceHistoryView(ListAPIView):
    serializer_class = AnnonceSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'slug'
    def get(self, request, format=None):
        queryset = Annonces.objects.all().filter(historique=True,annonceur=request.user)
        serializer = AnnonceSerializer(queryset, many=True)
        return Response(serializer.data)

# add to history
#class AnnonceHistory(APIView):
#    serializer_class = AnnonceHistory
 #   permission_classes = [IsAuthenticated]
  #  def post(self, request, format=None):
   #     return 

# add to favorie 
#class AnnonceFavorie(APIView):
#    serializer_class = AnnonceFavorie
 #  permission_classes = [IsAuthenticated]
  #  def post(self, request, format=None):
   #     return

class AnnonceSearchView(APIView):
    serializer_class = AnnonceSerializer
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        modalite=data['modalite']
        wilaya=data['wilaya']
        commun=data['commun']
        date=data['date']
        queryset = Annonces.objects.filter(category__iexact=category,modalite__iexact=modalite,wilaya__iexact=wilaya,commun__iexact=commun)

        serializer = AnnonceSerializer(queryset, many=True)

        return Response(serializer.data)