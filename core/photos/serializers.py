from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils.text import slugify

from . import models


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
    
    class Meta:
        model = User
        fields = ['id', 'username', 'profile']


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

