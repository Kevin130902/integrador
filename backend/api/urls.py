from django.urls import include, path

from . import views

products_patterns = (
    [
        path("", views.products, name="products"),
        path("<slug:prod>/", views.get_product, name="get_product")
    ],
    "products"
)

urlpatterns = [
    path("products/", include(products_patterns))
]
