from django.db import models
from ..models.contacts import Contacts


class SocialNets(models.Model):
    contacts = models.ForeignKey(Contacts, on_delete=models.CASCADE, verbose_name='Контакты')
    name = models.CharField(verbose_name='Название', max_length=50)
    url = models.URLField(verbose_name='Ссылка')

    class Meta:
        verbose_name = 'Соцсеть'
        verbose_name_plural = 'Соцсети'

    def __str__(self):
        return self.name
