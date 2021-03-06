from django.urls import path

from . import views

urlpatterns = [
    path('markdown/<page_name>', views.get_markdown, name='markdown'),

    path('commandSets', views.get_command_sets, name='command_sets'),
    path('commandCategories', views.get_command_categories, name='command_categories'),
    path('commands', views.get_commands, name='commands'),

    path('itemSets', views.get_item_sets, name='item_sets'),
    path('itemCategories', views.get_item_categories, name='item_categories'),
    path('items', views.get_items, name='items'),
]