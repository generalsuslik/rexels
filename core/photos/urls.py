from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views


urlpatterns = [
    path('photos/', views.PhotoList.as_view(), name='photos'),
    path('photos/<int:pk>/', views.PhotoDetail.as_view(), name="photo"),
    path('profiles/', views.ProfileList.as_view(), name='profiles'),
    path('profiles/<slug:slug>/', views.ProfileDetail.as_view(), name='profile'),
    path('bookmarks/', views.BookmarkList.as_view(), name='bookmarks'),
]

urlpatterns = format_suffix_patterns(urlpatterns)

