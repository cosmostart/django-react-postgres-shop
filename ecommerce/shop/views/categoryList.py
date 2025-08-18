from rest_framework import generics
from rest_framework.exceptions import NotFound, ValidationError, APIException
from ..services import CategoryService
from ..serializers import CategorySerializer


class CategoryList(generics.ListCreateAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        level = self.request.GET['level']
        status = self.request.GET['status']
        if not level and not status:
            raise APIException("level/status is required to fetch main categories.")
        try:
            return CategoryService.get_categories_by_level_status(level, status)
        except ValueError:
            raise APIException("Invalid level/status format.")
