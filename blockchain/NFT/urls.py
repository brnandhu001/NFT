from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home,name="home"),
    path('account/register', views.register,name="register"),
    path("login/",views.login,name='login'),
    path("login/login",views.login,name='login'),
    path("logout/",views.logout,name='logout'),



]