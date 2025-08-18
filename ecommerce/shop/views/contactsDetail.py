from rest_framework import generics
from ..models import Contacts
from ..serializers import ContactsSerializer


class ContactsDetail(generics.ListCreateAPIView):
    serializer_class = ContactsSerializer

    def get_queryset(self):
        return Contacts.objects.all()
