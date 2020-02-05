from django.http import JsonResponse
from rest_framework import status


def handler404(request, *arg, **argv):
    return JsonResponse({'detail': 'Route not found'}, status=status.HTTP_404_NOT_FOUND)


def handler500(request, *arg, **argv):
    return JsonResponse({'detail': 'Internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)