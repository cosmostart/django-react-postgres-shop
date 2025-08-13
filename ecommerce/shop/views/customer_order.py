import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.models import User
from ..models import Customer, Order, OrderItems, Product, Color, Size
from django.contrib.auth.hashers import make_password

@csrf_exempt
def customer_order(request):
    user_id = request.POST.get('user_id')
    user_cartNumber = request.POST.get('user_cartNumber')
    order_type = request.POST.get('order_type')
    discount_sum = request.POST.get('discount_sum')
    total_sum = request.POST.get('total_sum')
    comment = request.POST.get('comment')

    cart = json.loads(request.POST.get('cart'))
    #
    #print(cart)

    order = Order.objects.create(
        customer=Customer.objects.get(user=user_id),
        cart_number=user_cartNumber,
        order_type=order_type,
        discount_sum=discount_sum,
        total_sum=total_sum,
        comment=comment
    )

    for i in cart:
        order_item = OrderItems.objects.create(
            order=order,
            product=Product.objects.get(id=i['product']['id']),
            color=Color.objects.get(name=i['product']['color']),
            size=Size.objects.get(size=i['product']['size'])
        )

    if order:
        msg = {
            'bool': True,
            'msg': 'Заявка оформлена!!!'
            # 'user': user.username, order fields like id
            # 'user_id': user.id,
            # 'user_firstname': user.first_name,
            # 'user_lastname': user.last_name,
            # 'user_email': user.email,
            # 'user_phone': phone
        }
    else:
        msg = {
            'bool': False,
            'msg': 'Заявка не оформлена!!!'
        }
    return JsonResponse(msg)
