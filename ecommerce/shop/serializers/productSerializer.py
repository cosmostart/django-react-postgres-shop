from rest_framework import serializers
from .productImageSerializer import ProductImageSerializer
from ..models import Product


class ProductSerializer(serializers.ModelSerializer):
    product_imgs = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(ProductSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
