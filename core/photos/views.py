from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.views import TokenObtainPairView

from . import serializers
from . import models


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = serializers.MyTokenObtainPairSerializer


class PhotoList(APIView):
    parser_classes = (MultiPartParser, FormParser)
    
    def get(self, request):
        photos = models.Photo.objects.all().order_by('-likes')
        serializer = serializers.PhotoSerializer(photos, many=True)
        
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.PhotoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class PhotoDetail(APIView):
    def get_object(self, pk):
        try:
            return models.Photo.objects.get(pk=pk)
        except models.Photo.DoesNotExist:
            raise Http404
        
    def get(self, request, pk):
        photo = self.get_object(pk)
        serializer = serializers.PhotoSerializer(photo)
        
        return Response(serializer.data)
    
    def put(self, request, pk):
        photo = self.get_object(pk)
        serializer = serializers.PhotoSerializer(photo, data=request.data)    
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    def delete(self, request, pk):
        photo = self.get_object(pk)
        photo.delete()
        
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
class ProfileList(APIView):
    def get(self, request):
        profiles = models.Profile.objects.all().order_by('id')
        serializer = serializers.ProfileSerializer(profiles, many=True)
        
        return Response(serializer.data)
    
    def post(self, request):
        serializer = serializers.ProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileDetail(APIView):
    def get_object(self, slug):
        try:
            return models.Profile.objects.get(slug=slug)
        except models.Profile.DoesNotExist:
            raise Http404

    def get(self, request, slug, format=None):
        profile = self.get_object(slug)
        serializer = serializers.ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, slug, format=None):
        profile = self.get_object(slug)
        serializer = serializers.ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, slug, format=None):
        profile = self.get_object(slug)
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    
class BookmarkList(APIView):
    def get(self, request):
        bookmarks = models.Bookmark.objects.all().order_by('-created_at')
        serializer = serializers.BookmarkSerializer(bookmarks, many=True)
        
        return Response(serializer.data)
    
    def put(self, request):
        serializer = serializers.BookmarkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

