from rest_framework import generics
from ..models import Order
from ..serializers import OrderListSerializer


class OrderList(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderListSerializer
