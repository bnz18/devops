from django.urls import path
from . import views

urlpatterns = [
	path('', views.hello, name='hello'),
    path('api/hello/', views.hello_rest_api, name='hello_rest_api' ),
]
