from django.contrib.auth.models import User
from django.db import models


class Customer(models.Model):
    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)
    mobile = models.CharField(max_length=11, unique=True, verbose_name='Телефон')
    # Дата регистрации
    # Дата последнего обновления
    # Имя
    # email

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return self.user.username
