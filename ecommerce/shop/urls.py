from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryList.as_view()),
    path('category/<int:pk>', views.CategoryDetail.as_view()),
    path('products/', views.ProductList.as_view()),
    path('product/<int:pk>', views.ProductDetail.as_view()),
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>', views.CustomerDetail.as_view()),
    path('customer/login', views.customer_login, name='customer_login'),
    path('customer/register', views.customer_register, name='customer_register'),
    path('orders/', views.OrderList.as_view()),
    path('order/<int:pk>', views.OrderDetail.as_view()),
]
