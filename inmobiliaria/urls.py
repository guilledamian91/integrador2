"""
URL configuration for inmobiliaria project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import InmobiliariaViews, BlogView, FranquiciaView, ComprarView, AlquilarView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', InmobiliariaViews.as_view(), name='index'),
    path('blog/', BlogView.as_view(), name='blog'),
    path('franquicia/', FranquiciaView.as_view(), name='franquicia'),
    path('comprar/', ComprarView.as_view(), name='comprar'),
    path('alquilar/', AlquilarView.as_view(), name='alquilar'),
]

