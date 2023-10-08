import sys

from django.db import models
from django.contrib.auth.models import User
from django.core.files import File
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.utils.text import slugify
from PIL import Image
from io import BytesIO


class Photo(models.Model):
    image = models.ImageField(upload_to='images/good_quality/%Y/%m/', null=False, blank=False)
    image_bad_quality = models.ImageField(upload_to='images/bad_quality/%Y/%m/', null=True, blank=True)
    likes = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    created_at = models.DateField(auto_now_add=True)
    
    def save(self, *args, **kwargs):
        im = Image.open(self.image)

        output = BytesIO()

        im.save(output, format='JPEG', quality=2)
        output.seek(0)

        self.image_bad_quality = InMemoryUploadedFile(output, 'ImageField', "%s.jpg" % self.image.name.split('.')[0], 'image/jpeg',
                                        sys.getsizeof(output), None)

        super(Photo, self).save()
           
    

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
    
    
    