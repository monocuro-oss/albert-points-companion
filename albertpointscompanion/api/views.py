from django.shortcuts import render
from django.http import JsonResponse
from django.forms.models import model_to_dict

from .models import CommandCategory, Command


def get_command_sets(request):
    categories = CommandCategory.objects.all()
    data = [{**model_to_dict(category), 'commands': list(category.command_set.values())}
            for category in categories]
    return JsonResponse(data, safe=False)


def get_command_cateogories(request):
    data = list(CommandCategory.objects.values())
    return JsonResponse(data, safe=False)


def get_commands(request):
    data = list(Command.objects.values())
    return JsonResponse(data, safe=False)
