from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.models import User
from ..models import Customer
from django.contrib.auth.hashers import make_password

@csrf_exempt
def customer_register(request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    address = request.POST.get('address')
    mobile = request.POST.get('mobile')
    password = request.POST.get('password')
    if User.objects.filter(username=username).exists():
        msg = {
            'bool': False,
            'msg': 'Это Имя пользователя уже зарегистрировано!!!'
        }
    elif User.objects.filter(email=email).exists():
        msg = {
            'bool': False,
            'msg': 'Этот Email уже зарегистрирован!!!'
        }
    elif Customer.objects.filter(mobile=mobile).exists():
        msg = {
            'bool': False,
            'msg': 'Этот Телефон уже зарегистрирован!!!'
        }
    else:
        user = User.objects.create(
            first_name=first_name,
            last_name=last_name,
            username=username,
            email=email,
            password=make_password(password)
        )
        if user:
            customer = Customer.objects.create(user=user, mobile=mobile, address=address)
            msg = {
                'bool': True,
                'user': user.id,
                'customer': customer.id,
                'msg': 'Вы зарегистрированы!'
            }
        else:
            msg = {
                'bool': False,
                'msg': 'Что-то пошло не так!!!'
            }
    return JsonResponse(msg)
