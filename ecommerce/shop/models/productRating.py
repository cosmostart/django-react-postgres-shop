from django.db import models
from .customer import Customer
from .product import Product


class ProductRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_ratings')
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'Рейтинг продукта'
        verbose_name_plural = 'Рейтинг продуктов'

    def __str__(self):
        return f'{self.rating} - {self.reviews}'
