from rest_framework import generics
from ..models import Order, OrderItems
from ..serializers import OrderSerializer


class OrderDetail(generics.ListCreateAPIView):
    serializer_class = OrderSerializer

    def get_queryset(self):
        order_id = self.kwargs['pk']
        order = Order.objects.get(id=order_id)
        order_items = OrderItems.objects.filter(order=order)
        return order_items
