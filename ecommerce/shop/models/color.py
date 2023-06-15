from colorfield.fields import ColorField
from django.db import models


class Color(models.Model):
    name = models.CharField(max_length=50, verbose_name='Название')
    color = ColorField(default='#6AA9FF', verbose_name='Цвет')

    class Meta:
        verbose_name = 'Цвет'
        verbose_name_plural = 'Цвета'

    def __str__(self):
        return self.name
