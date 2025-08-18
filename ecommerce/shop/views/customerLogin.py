from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate
from ..models import Customer

@csrf_exempt
def customer_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
        phone = Customer.objects.get(user=user.id).mobile
        address = Customer.objects.get(user=user.id).address
        msg = {
            'bool': True,
            'user': user.username,
            'user_id': user.id,
            'user_firstname': user.first_name,
            'user_lastname': user.last_name,
            'user_email': user.email,
            'phone': phone,
            'address': address
        }
    else:
        msg = {
            'bool': False,
            'msg': 'Неверное Имя пользователя или Пароль!!!'
        }
    return JsonResponse(msg)
