from django.shortcuts import render
 
# import view sets from the REST framework
from rest_framework import viewsets
 
# import the TodoSerializer from the serializer file
from .serializers import TodoSerializer
 
# import the Todo model from the models file
