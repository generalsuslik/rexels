from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify


class Photo(models.Model):
    image = models.ImageField(upload_to='images/%Y/%m/', null=False, blank=False)
    likes = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    created_at = models.DateField(auto_now_add=True)
    

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    slug = models.SlugField(unique=True)
    instagram_link = models.URLField(blank=True)
    
    created_at = models.DateField(auto_now_add=True)
    
    def save(self, *args, **kwargs) -> None:
        self.slug = slugify(self.user.username)
        super().save(*args, **kwargs)
        
    def __str__(self) -> str:
        return self.user.username
    

class Bookmark(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)
    
    created_at = models.DateField(auto_now_add=True)
    
    
    