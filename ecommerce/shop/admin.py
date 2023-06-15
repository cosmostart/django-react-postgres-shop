from django.contrib import admin
from django_mptt_admin.admin import DjangoMpttAdmin
from .models.category import Category
from .models.color import Color
from .models.landingSlide import LandingSlide
from .models.contacts import Contacts
from .models.product import Product
from .models.socialNets import SocialNets
from .models.photosForProduct import PhotosForProduct
from .models.size import Size
from .models.customer import Customer
from .models.order import Order
from .models.orderItems import OrderItems
from .models.customerAddress import CustomerAddress
from .models.productRating import ProductRating


class CategoryAdmin(DjangoMpttAdmin):
    readonly_fields = ('name',)

    """def has_add_permission(self, request, obj=None):  # запрет на добавление
        return False

    def has_delete_permission(self, request, obj=None):  # запрет на удаление
        return False"""


class AddDeleteProhibit(admin.ModelAdmin):
    def has_add_permission(self, request, obj=None):  # запрет на добавление
        return False

    def has_delete_permission(self, request, obj=None):  # запрет на удаление
        return False


class ProductAdmin(admin.ModelAdmin):
    readonly_fields = ('name',)
    list_display = ('name_for_site', 'article', 'category', 'show_on_site')
    list_filter = ('name_for_site', 'category')

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'category':
            kwargs['queryset'] = Category.objects.filter(level='1')
        return super(ProductAdmin, self).formfield_for_foreignkey(db_field, request, **kwargs)


class CustomerAdmin(admin.ModelAdmin):
    list_display = ('get_reg_date', 'get_first_name', 'get_last_name', 'mobile', 'get_email')

    def get_reg_date(self, obj):
        return obj.user.date_joined

    get_reg_date.short_description = 'Дата регистрации'

    def get_first_name(self, obj):
        return obj.user.first_name

    get_first_name.short_description = 'Имя'

    def get_last_name(self, obj):
        return obj.user.last_name

    get_last_name.short_description = 'Фамилия'

    def get_email(self, obj):
        return obj.user.email

    get_email.short_description = 'Email'


admin.site.register(Category, CategoryAdmin)
admin.site.register(Color)
admin.site.register(LandingSlide, AddDeleteProhibit)
admin.site.register(Contacts, AddDeleteProhibit)
admin.site.register(SocialNets)
admin.site.register(Product, ProductAdmin)
admin.site.register(PhotosForProduct)
admin.site.register(Size)
admin.site.register(Customer, CustomerAdmin)
admin.site.register(Order)
admin.site.register(OrderItems)
admin.site.register(CustomerAddress)
admin.site.register(ProductRating)
