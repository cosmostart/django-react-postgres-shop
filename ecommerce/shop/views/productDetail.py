from rest_framework import generics
from ..models import Product
from ..serializers import ProductDetailSerializer


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer
