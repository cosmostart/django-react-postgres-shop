from django.db import models


class LandingSlide(models.Model):
    image_right = models.ImageField(verbose_name='Изображение справа')
    image_left = models.ImageField(verbose_name='Изображение слева')
    subtitle = models.CharField(max_length=50, verbose_name='Подзаголовок')

    class Meta:
        verbose_name = 'Посадочный слайд'
        verbose_name_plural = 'Посадочный слайд'

    def __str__(self):
        return self.subtitle
