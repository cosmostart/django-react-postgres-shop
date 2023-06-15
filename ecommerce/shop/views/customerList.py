from rest_framework import generics
from ..models import Customer
from ..serializers import CustomerListSerializer


class CustomerList(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerListSerializer
