from django.db import models
from mptt.fields import TreeForeignKey
from mptt.models import MPTTModel


class Category(MPTTModel):
    STATUS = (
        ('Да', 'Да'),
        ('Нет', 'Нет')
    )
    parent = TreeForeignKey('self', on_delete=models.PROTECT, null=True, blank=True, related_name='children',
                            db_index=True, verbose_name='Родительская категория')
    name = models.CharField(max_length=100, verbose_name='Название', blank=True, null=True)
    name_for_site = models.CharField(max_length=50, verbose_name='Название для сайта', default='')
    image = models.ImageField(verbose_name='Изображение')  # upload_to='static/store/images/'
    status = models.CharField(verbose_name='Показывать на сайте', max_length=10, choices=STATUS)

    class MPTTMeta:
        order_insertion_by = ['name']

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    @staticmethod
    def get_all_categories():
        return Category.objects.all()

    @staticmethod
    def get_filtered_categories():
        return Category.objects.filter(status='Да')

    def __str__(self):
        return self.name_for_site
