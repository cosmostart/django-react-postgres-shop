from django.contrib import admin
from django_mptt_admin.admin import DjangoMpttAdmin
from .models import *


class AddProhibit:
    def has_add_permission(self, request, obj=None):  # запрет на добавление
        return False


class DeleteProhibit:
    def has_delete_permission(self, request, obj=None):  # запрет на удаление
        return False


class ChangeProhibit:
    def has_change_permission(self, request, obj=None):  # запрет на редактирование
        return False


@admin.register(Category)
class CategoryAdmin(DjangoMpttAdmin, AddProhibit, DeleteProhibit):
    readonly_fields = ('name',)


class SocialsInline(admin.StackedInline):
    model = SocialNets
    extra = 0


@admin.register(Contacts)
class ContactsAdmin(AddProhibit, DeleteProhibit, admin.ModelAdmin):
    inlines = [
        SocialsInline,
    ]


class PhotosInline(DeleteProhibit, admin.StackedInline):
    model = PhotosForProduct


@admin.register(Product)
class ProductAdmin(AddProhibit, DeleteProhibit, admin.ModelAdmin):
    readonly_fields = ('name',)
    list_display = ('name_for_site', 'article', 'category', 'show_on_site')
    list_filter = ('name_for_site', 'category')
    inlines = [
        PhotosInline,
    ]

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'category':
            kwargs['queryset'] = Category.objects.filter(level='1')
        return super(ProductAdmin, self).formfield_for_foreignkey(db_field, request, **kwargs)


@admin.register(Customer)
class CustomerAdmin(AddProhibit, DeleteProhibit, ChangeProhibit, admin.ModelAdmin, ):
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


class ItemsInline(admin.StackedInline):
    model = OrderItems
    fk_name = 'order'
    extra = 0


@admin.register(Order)
class OrderAdmin(AddProhibit, DeleteProhibit, ChangeProhibit, admin.ModelAdmin):
    list_display = ('order_time', 'order_number', 'get_first_name', 'get_email', 'get_phone', 'order_type', 'address', 'discount_sum', 'total_sum')
    inlines = [
        ItemsInline,
    ]

    def get_first_name(self, obj):
        return obj.customer.user.first_name

    get_first_name.short_description = 'Имя'

    def get_email(self, obj):
        return obj.customer.user.email

    get_email.short_description = 'Email'

    def get_phone(self, obj):
        return obj.customer.mobile

    get_phone.short_description = 'Телефон'


admin.site.register(Color)
