# Generated by Django 4.2.1 on 2023-06-15 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_alter_customer_mobile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='mobile',
            field=models.CharField(max_length=11, unique=True, verbose_name='Телефон'),
        ),
    ]
