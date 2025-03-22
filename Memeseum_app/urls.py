from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views
urlpatterns = [

    path('', views.home,name='home'),
    path('add', views.add,name='add'),
    path('ver', views.ver,name='ver'),
    path('edit', views.edit,name='edit'),
    path('delete', views.delete,name='delete'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)