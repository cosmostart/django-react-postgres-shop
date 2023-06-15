from rest_framework import serializers
from ..models import Customer


class CustomerListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'user', 'mobile']

    def __init__(self, *args, **kwargs):
        super(CustomerListSerializer, self).__init__(*args, **kwargs)
