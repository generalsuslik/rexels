from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils.text import slugify
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import Token

from . import models


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user) -> Token:
        token = super().get_token(user)
        
        token['username'] = str(user.username)
        token['password'] = str(user.password)
        
        return token


class DummyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ('password', )
        

class ProfileSerializer(serializers.ModelSerializer):
    user = DummyUserSerializer()
    
    class Meta:
        model = models.Profile
        fields = "__all__"


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        
        return user
    
    class Meta:
        model = User
        fields = ['id', 'username', 'profile', 'email', 'first_name', 'last_name']


class PhotoSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    image = serializers.SerializerMethodField('get_image_url')
    
    class Meta:
        model = models.Photo
        fields = "__all__"
    
    def get_image_url(self, obj):
        return obj.image.url
    
    
class BookmarkSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    photo = PhotoSerializer()
    
    class Meta:
        model = models.Bookmark
        fields = "__all__"

