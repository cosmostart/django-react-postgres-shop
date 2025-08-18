from rest_framework import serializers
from ..models import PhotosForProduct


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotosForProduct
        fields = '__all__'
