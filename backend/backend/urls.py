from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static 
from rest_framework import urls
# add include to the path
from django.urls import path, include,re_path

urlpatterns = [
	path('admin/', admin.site.urls),
	path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
	path('api/user/', include('account.urls')),
	path('api/annonce/', include('annonce.urls')),
	path('summernote/', include('django_summernote.urls'))

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

