from django.db.models import Q
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
        if 'searchstring' in self.kwargs:
            search = self.kwargs['searchstring'].lower()
            if search != 'все':
                list_of_id = []
                for i in Category.objects.all():
                    if search in i.name_for_site.lower():
                        list_of_id.append(i)

                list_of_names = []
                for i in Product.objects.all():
                    if search in i.name_for_site.lower():
                        list_of_names.append(i.name_for_site)
                qs = qs.filter(Q(category__in=list_of_id) | Q(name_for_site__in=list_of_names) | Q(article=search), show_on_site='Да')
        return qs
