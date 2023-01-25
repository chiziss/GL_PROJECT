from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static 

# add include to the path
from django.urls import path, include,re_path

# import routers from the REST framework
# it is necessary for routing
from rest_framework import routers

# create a router object
#router = routers.DefaultRouter()

# register the router
#router.register(r'tasks',views.TodoView, 'task')

urlpatterns = [
	path('admin/', admin.site.urls),
	path('api/user/', include('account.urls')),
	path('api/annonce/', include('annonce.urls')),
	path('summernote/', include('django_summernote.urls')),
	# add another path to the url patterns
	# when you visit the localhost:8000/api
	# you should be routed to the django Rest framework
	#path('api/', include(router.urls)),
	#path("", TemplateView.as_view(template_name="index.html")),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]

