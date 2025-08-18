from ..repositories import CategoryRepository

class CategoryService:
    @staticmethod
    def get_all_categories():
        return CategoryRepository.get_all_categories()

    @staticmethod
    def get_categories_by_level_status(level, status):
        return CategoryRepository.get_categories_by_level_status(level, status)
