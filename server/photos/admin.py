from django.contrib import admin
from . import models


admin.site.register(models.Photo)
admin.site.register(models.Profile)
admin.site.register(models.Bookmark)
