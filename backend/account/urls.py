from django.urls import path
from account.views import  *
from django.urls import path, re_path

urlpatterns = [
    #sign up url
    path('register/', UserRegistrationView.as_view(), name='register'),
    #sign in url
    path('login/', UserLoginView.as_view(), name='login'),
    #profile url  
    path('profile/', UserProfileView.as_view(), name='profile'),
    #change pwd url 
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    #google authentication
    re_path('api/register-by-access-token/' + r'social/(?P<backend>[^/]+)/$', register_by_access_token),
    path('api/authentication-test/', authentication_test),
   
]