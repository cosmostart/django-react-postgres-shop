from rest_framework import serializers
from ..models import Category


class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'parent', 'name', 'name_for_site', 'image', 'status']

    def __init__(self, *args, **kwargs):
        super(CategoryDetailSerializer, self).__init__(*args, **kwargs)
