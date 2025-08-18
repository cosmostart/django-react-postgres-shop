from rest_framework import serializers
from ..models import OrderItems


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 2
