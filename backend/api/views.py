from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models.query import EmptyQuerySet
from django.http import HttpRequest
from rest_framework import status

from .models import Produto
from .serializers import ProdutoSerializer

@api_view(["GET"])
def get_product(_, prod: str):
    queryset = Produto.objects.filter(name=prod).first()

    if queryset is not None:
        return Response(ProdutoSerializer(queryset).data)

    return Response(status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "POST"])
def products(request: HttpRequest):
    method = request.method

    if method == "GET":
        queryset = Produto.objects.all()
        serializer = ProdutoSerializer(queryset, many=True)

        return Response(serializer.data)

    if method == "POST":
        serializer = ProdutoSerializer(data=request.data)
        responseStatus = status.HTTP_400_BAD_REQUEST

        if serializer.is_valid():
            serializer.save()
            responseStatus = status.HTTP_201_CREATED

        return Response(data=serializer.data, status=responseStatus)