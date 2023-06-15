from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate

@csrf_exempt
def customer_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
        msg = {
            'bool': True,
            'user': user.username
        }
    else:
        msg = {
            'bool': False,
            'msg': 'Неверное Имя пользователя или Пароль!!!'
        }
    return JsonResponse(msg)
