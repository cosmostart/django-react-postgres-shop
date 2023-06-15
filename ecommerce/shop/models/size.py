from django.db import models


class Size(models.Model):
    size = models.CharField(verbose_name='Российский размер', max_length=5)
    manufacturer_name = models.CharField(verbose_name='Размер производителя', max_length=3)
    bust = models.CharField(max_length=7, verbose_name='Обхват груди, см')
    waist = models.CharField(max_length=7, verbose_name='Обхват талии, см')
    hips = models.CharField(max_length=7, verbose_name='Обхват бёдер, см')

    class Meta:
        verbose_name = 'Размер'
        verbose_name_plural = 'Размеры'

    def __str__(self):
        return self.size
