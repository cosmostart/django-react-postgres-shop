from django.db import models
from .customer import Customer


class CustomerAddress(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    address = models.TextField()
    default_address = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Адрес пользователя'
        verbose_name_plural = 'Адреса пользователей'

    def __str__(self):
        return self.address
