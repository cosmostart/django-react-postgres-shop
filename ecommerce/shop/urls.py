from django.urls import path
from .views import *

urlpatterns = [
    path('categories/', CategoryList.as_view()),
    path('category/<int:pk>', CategoryDetail.as_view()),
    path('products/', ProductList.as_view()),
    path('product/<int:pk>', ProductDetail.as_view()),
    path('search/<str:searchstring>', ProductList.as_view()),
    path('customers/', CustomerList.as_view()),
    path('customer/<int:pk>', CustomerDetail.as_view()),
    path('customer/login', customer_login, name='customer_login'),
    path('customer/register', customer_register, name='customer_register'),
    path('customer/order', customer_order, name='customer_order'),
    path('orders/', OrderList.as_view()),
    path('order/<int:pk>', OrderDetail.as_view()),
    path('contacts/', ContactsDetail.as_view()),
]
