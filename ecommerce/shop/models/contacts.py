from django.db import models


class Contacts(models.Model):
    phone = models.CharField(verbose_name='Телефон', max_length=12)
    email = models.EmailField(verbose_name='Почтовый ящик')
    address = models.CharField(verbose_name='Адрес', max_length=100)
    working_time = models.CharField(verbose_name='Время работы', max_length=100)
    long = models.DecimalField(verbose_name='Долгота', max_digits=9, decimal_places=6)
    lat = models.DecimalField(verbose_name='Широта', max_digits=9, decimal_places=6)

    class Meta:
        verbose_name = 'Контакты'
        verbose_name_plural = 'Контакты'

    def __str__(self):
        return self.email
