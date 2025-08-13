from django.db import models
from .customer import Customer


class Order(models.Model):
    def number():
        no = Order.objects.count()
        if no == None:
            return 1
        else:
            return no + 1

    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, verbose_name='Покупатель')
    cart_number = models.IntegerField(default=0, verbose_name='Количество', null=True, blank=True)
    order_time = models.DateTimeField(auto_now_add=True)  #
    STATUS = (
        ('Самовывоз', 'Самовывоз'),
        ('Доставка', 'Доставка')
    )
    order_type = models.CharField(verbose_name='Способ получения', choices=STATUS, default='Самовывоз')
    order_number = models.IntegerField(verbose_name='Номер', default=number) #models.AutoField(primary_key=True)
    discount_sum = models.IntegerField(verbose_name='Сумма скидок', default=0)
    total_sum = models.IntegerField(verbose_name='Cумма с учётом скидок', default=0)
    comment = models.TextField(verbose_name='Комментарий', blank=True, null=True, max_length=500)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self):
        return '%s' % self.order_time
