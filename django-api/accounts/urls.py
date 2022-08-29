from django.urls import path, include
from .views import GoogleloginView

urlpatterns = [
    path('google/', GoogleloginView.as_view(), name="google"),
]
