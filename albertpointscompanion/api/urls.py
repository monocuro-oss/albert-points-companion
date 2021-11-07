from django.urls import path

from . import views

urlpatterns = [
    path('commandSets', views.get_command_sets, name='command_sets'),
    path('commandCategories', views.get_command_cateogories, name='command_categories'),
    path('commands', views.get_commands, name='commands'),
]