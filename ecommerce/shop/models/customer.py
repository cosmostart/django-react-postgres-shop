from django.contrib.auth.models import User
from django.db import models


class Customer(models.Model):
    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)
    mobile = models.CharField(max_length=11, unique=True, verbose_name='Телефон')
    address = models.CharField(verbose_name='Адрес', max_length=150, default='')
    # Дата регистрации
    # Дата последнего обновления
    # Имя
    # email

    class Meta:
        verbose_name = 'Покупатель'
        verbose_name_plural = 'Покупатели'

    def __str__(self):
        return self.user.username
