from django.contrib import admin
from django_mptt_admin.admin import DjangoMpttAdmin
from .models import *


def deleteProhibit(class_to_decorate):
    class DeleteProhibit(class_to_decorate):
        def has_delete_permission(self, request, obj=None):  # запрет на удаление
            return False
    return DeleteProhibit


def addProhibit(class_to_decorate):
    class AddProhibit(class_to_decorate):
        def has_add_permission(self, request, obj=None):  # запрет на добавление
            return False
    return AddProhibit


def changeProhibit(class_to_decorate):
    class ChangeProhibit(class_to_decorate):
        def has_change_permission(self, request, obj=None):  # запрет на редактирование
            return False
    return ChangeProhibit


@admin.register(Category)
@deleteProhibit
@addProhibit
class CategoryAdmin(DjangoMpttAdmin):
    readonly_fields = ('name',)


class SocialsInline(admin.StackedInline):
    model = SocialNets
    extra = 0


@admin.register(Contacts)
@deleteProhibit
@addProhibit
class ContactsAdmin(admin.ModelAdmin):
    inlines = [
        SocialsInline,
    ]

@deleteProhibit
class PhotosInline(admin.StackedInline):
    model = PhotosForProduct


@admin.register(Product)
@deleteProhibit
@addProhibit
class ProductAdmin(admin.ModelAdmin):
    readonly_fields = ('name',)
    list_display = ('name_for_site', 'article', 'category', 'show_on_site')
    list_filter = ('name_for_site', 'category')
    inlines = [
        PhotosInline,
    ]


@admin.register(Customer)
@changeProhibit
@deleteProhibit
@addProhibit
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


class ItemsInline(admin.StackedInline):
    model = OrderItems
    fk_name = 'order'
    extra = 0


@admin.register(Order)
@changeProhibit
@deleteProhibit
@addProhibit
class OrderAdmin(admin.ModelAdmin):
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
