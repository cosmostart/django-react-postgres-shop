from rest_framework import serializers
from .productImageSerializer import ProductImageSerializer
from ..models import Product


class ProductListSerializer(serializers.ModelSerializer):
    product_imgs = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'name_for_site', 'article', 'price', 'discount_price', 'description',
                  'color', 'other_colors', 'sizes', 'fitting_sizes', 'show_on_site', 'product_imgs']

    def __init__(self, *args, **kwargs):
        super(ProductListSerializer, self).__init__(*args, **kwargs)
