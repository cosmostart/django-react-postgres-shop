from django.db import models
from ..models.product import Product


class PhotosForProduct(models.Model):
    product = models.ForeignKey(Product, unique=True, on_delete=models.CASCADE, verbose_name='Товар', related_name='product_imgs')
    image1 = models.ImageField(verbose_name='Фото')
    image2 = models.ImageField(verbose_name='Фото', blank=True, null=True)
    image3 = models.ImageField(verbose_name='Фото', blank=True, null=True)
    image4 = models.ImageField(verbose_name='Фото', blank=True, null=True)
    image5 = models.ImageField(verbose_name='Фото', blank=True, null=True)
    image6 = models.ImageField(verbose_name='Фото', blank=True, null=True)
    image7 = models.ImageField(verbose_name='Фото', blank=True, null=True)

    class Meta:
        verbose_name = 'Фото товара'
        verbose_name_plural = 'Фото товаров'

    def __str__(self):
        return self.product.name_for_site
