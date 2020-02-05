from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response

from app.models import User
from app.serializers import UserCreateSerializer, UserSerializer


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()


@api_view(['put'])
def create(request):
    if not request.data:
        return Response({'detail': 'Missing body'}, status=status.HTTP_400_BAD_REQUEST)

    data = request.data

    try:
        if User.all_objects.get(email=data['email']):
            return Response({'detail': 'User with this email already exists'}, status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        pass

    password = data['password']
    user_validate = UserCreateSerializer(data=data)
    user_validate.is_valid(raise_exception=True)
    user_validate.save()
    user = User.objects.get(pk=user_validate.data['id'])
    user.set_password(password)
    user.save()

    serialized_user = UserSerializer(user)

    return Response(serialized_user.data, status=status.HTTP_200_OK)