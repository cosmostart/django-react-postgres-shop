from rest_framework import generics, pagination
from ..models import Product, Category
from ..serializers import ProductListSerializer


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer
    pagination_class = pagination.PageNumberPagination

    def get_queryset(self):
        qs = super().get_queryset()
        if 'category' in self.request.GET:
            category = self.request.GET['category']
            category = Category.objects.get(id=category)
            qs = qs.filter(category=category, show_on_site='Да')
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            qs = qs[len(qs)-limit:]
        return qs
