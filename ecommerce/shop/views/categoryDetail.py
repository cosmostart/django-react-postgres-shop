from rest_framework import generics
from ..models import Category
from ..serializers import CategoryDetailSerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer
