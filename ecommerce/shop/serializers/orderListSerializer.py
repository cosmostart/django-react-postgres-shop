from rest_framework import serializers
from ..models import Order


class OrderListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'customer', 'order_time']

    def __init__(self, *args, **kwargs):
        super(OrderListSerializer, self).__init__(*args, **kwargs)
