from rest_framework import generics
from ..services import CategoryService
from ..serializers import CategorySerializer


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return CategoryService.get_all_categories()
