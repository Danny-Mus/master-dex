from rest_framework import status, exceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from app.authentication import token_expire_handler

from app.models import User
from app.serializers import UserSerializer, LoginSerializer



@api_view(['POST'])
def login(request):
    if not request.data:
        return Response({'detail': 'Email and password required'}, status=status.HTTP_400_BAD_REQUEST)
    data = request.data
    login_validate = LoginSerializer(data=data)
    login_validate.is_valid(raise_exception=True)

    try:
        user = User.objects.get(email=data['email'])
    except User.DoesNotExist:
        raise exceptions.AuthenticationFailed("Wrong login credentials")

    if not user.check_password(data['password']):
        raise exceptions.AuthenticationFailed('Wrong login credentials')

    token, _ = Token.objects.get_or_create(user=user)

    if token_expire_handler(token):
        token.delete()
        token = Token.objects.create(user=token.user)

    serializer = UserSerializer(user)
    data = serializer.data

    data['token'] = token.key
    return Response({'data': data}, status=status.HTTP_200_OK)


@api_view(['GET'])
def logout(request):
    """Return information

    Deletes the given token from the database
    This makes sure the user cannot use their token again thus is logged out
    """
    token = request.META.get('HTTP_AUTHORIZATION')
    token = Token.objects.get(key=token[6:])
    token.delete()
    return Response('', status=status.HTTP_204_NO_CONTENT)
