from django.db import models
from .customer import Customer


class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_now_add=True)  #

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self):
        return '%s' % self.order_time
