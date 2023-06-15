from rest_framework import generics
from ..models import Category
from ..serializers import CategoryListSerializer


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        if 'fetch_limit' in self.request.GET:
            limit = int(self.request.GET['fetch_limit'])
            #Category.objects.filter(level='1')
            qs = qs.filter(level='1', status='Да')
            qs = qs[:limit]
        return qs
