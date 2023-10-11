from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from . import views


urlpatterns = [
    path('photos/', views.PhotoList.as_view(), name='photos'),
    path('photos/<int:pk>/', views.PhotoDetail.as_view(), name="photo"),
    path('users/', views.UserList.as_view(), name='users'),
    path('profiles/', views.ProfileList.as_view(), name='profiles'),
    path('profiles/<slug:slug>/', views.ProfileDetail.as_view(), name='profile'),
    path('bookmarks/', views.BookmarkList.as_view(), name='bookmarks'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('registration/', views.sign_up, name='registration'),
]

urlpatterns = format_suffix_patterns(urlpatterns)

