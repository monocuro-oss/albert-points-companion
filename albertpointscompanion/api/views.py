from django.http import HttpResponse, JsonResponse
from django.forms.models import model_to_dict

from .models import (
    MarkdownPages,
    CommandCategory,
    Command,
    ItemCategory,
    Item,
    HelperGroup,
    HelperTeam,
    Helper
)

# Markdown Pages

def get_home_content(request):
    page, _ = MarkdownPages.objects.get_or_create(name='home')
    return HttpResponse(page.content)


# Commands

def get_command_sets(request):
    categories = CommandCategory.objects.all()
    data = [{**model_to_dict(category), 'commands': list(category.command_set.values())}
            for category in categories]
    return JsonResponse(data, safe=False)


def get_command_categories(request):
    data = list(CommandCategory.objects.values())
    return JsonResponse(data, safe=False)


def get_commands(request):
    data = list(Command.objects.values())
    return JsonResponse(data, safe=False)


# Items

def get_item_sets(request):
    categories = ItemCategory.objects.all()
    data = [{**model_to_dict(category), 'items': list(category.item_set.values())}
            for category in categories]
    return JsonResponse(data, safe=False)


def get_item_categories(request):
    data = list(ItemCategory.objects.values())
    return JsonResponse(data, safe=False)


def get_items(request):
    data = list(Item.objects.values())
    return JsonResponse(data, safe=False)


# Helpers

def get_helper_sets(request):
    groups = HelperGroup.objects.all()
    data = [
      {
        **model_to_dict(group),
        'teams': [{
          **model_to_dict(team),
          'helpers': list(team.helper_set.values())
        } for team in group.helperteam_set.all()]
      }
      for group in groups
    ]
    return JsonResponse(data, safe=False)


def get_helper_groups(request):
    data = list(HelperGroup.objects.values())
    return JsonResponse(data, safe=False)

def get_helper_teams(request):
    data = list(HelperTeam.objects.values())
    return JsonResponse(data, safe=False)

def get_helpers(request):
    data = list(Helper.objects.values())
    return JsonResponse(data, safe=False)