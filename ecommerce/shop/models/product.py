from django.db import models
from .category import Category
from .color import Color
from .size import Size


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Категория')
    name = models.CharField(max_length=100, verbose_name='Название', blank=True, null=True)
    name_for_site = models.CharField(max_length=20, verbose_name='Название для сайта')
    article = models.CharField(max_length=50, unique=True, verbose_name='Артикул')
    price = models.IntegerField(default=0, verbose_name='Цена')
    discount_price = models.IntegerField(default=0, verbose_name='Цена со скидкой', blank=True, null=True)
    description = models.TextField(verbose_name='Описание', blank=True, null=True, max_length=1000)
    color = models.ForeignKey(Color, on_delete=models.CASCADE, verbose_name='Цвет')
    other_colors = models.ManyToManyField(Color, verbose_name='Другие цвета', related_name='other_colors',
                                          blank=True, null=True)
    sizes = models.ManyToManyField(Size, verbose_name='Размеры', related_name='sizes')
    fitting_sizes = models.ManyToManyField(Size, verbose_name='Размеры на примерке', related_name='fitting',
                                           blank=True, null=True)
    STATUS = (
        ('Да', 'Да'),
        ('Нет', 'Нет')
    )
    show_on_site = models.CharField(verbose_name='Показывать на сайте', max_length=10, choices=STATUS)

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товары'

    def __str__(self):
        return self.name_for_site
