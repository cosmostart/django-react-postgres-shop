from django.db import models
from .order import Order
from .product import Product


class OrderItems(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, verbose_name='Заказ', related_name='order')
    product = models.ForeignKey(Product, on_delete=models.CASCADE, verbose_name='Товар', related_name='product')

    class Meta:
        verbose_name = 'Заказанный товар'
        verbose_name_plural = 'Заказанные товары'

    def __str__(self):
        return self.product.name_for_site
