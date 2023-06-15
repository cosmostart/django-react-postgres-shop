from rest_framework import serializers
from ..models import Category


class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'parent', 'name', 'name_for_site', 'image', 'status']

    def __init__(self, *args, **kwargs):
        super(CategoryListSerializer, self).__init__(*args, **kwargs)
