from rest_framework import serializers
from ..models import OrderItems


class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = ['id', 'order', 'product']

    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 2
