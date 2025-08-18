from ..models import Category

class CategoryRepository:
    @staticmethod
    def get_all_categories():
        return Category.objects.all()

    @staticmethod
    def get_categories_by_level_status(level, status):
        return Category.objects.filter(level=level, status=status)
