from rest_framework import serializers
from ..models import PhotosForProduct


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhotosForProduct
        fields = ['id', 'product', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7']
