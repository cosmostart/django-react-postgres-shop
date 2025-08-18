from rest_framework import serializers
from ..models import Contacts


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super(ContactsSerializer, self).__init__(*args, **kwargs)
