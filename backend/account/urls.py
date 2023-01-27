from django.urls import path
from account.views import  UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView
urlpatterns = [
    #sign up url
    path('register/', UserRegistrationView.as_view(), name='register'),
    #sign in url
    path('login/', UserLoginView.as_view(), name='login'),
    #profile url  
    path('profile/', UserProfileView.as_view(), name='profile'),
    #change pwd url 
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
   
]