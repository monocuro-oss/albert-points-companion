from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
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

# TODO: All resources are ordered by id but ideally, the order should be maintained separately

# Markdown Pages

AVAILABLE_MD_PAGES = ['home', 'getting_started', 'commands', 'items', 'dungeons']
def get_markdown(request, page_name):
    if page_name not in AVAILABLE_MD_PAGES:
        return HttpResponseNotFound('Document not found')

    page, _ = MarkdownPages.objects.get_or_create(name=page_name)
    return HttpResponse(page.content)


# Commands

def get_command_sets(request):
    categories = CommandCategory.objects.all().order_by('id')
    data = [{**model_to_dict(category), 'commands': list(category.command_set.values().order_by('id'))}
            for category in categories]
    return JsonResponse(data, safe=False)


def get_command_categories(request):
    data = list(CommandCategory.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)


def get_commands(request):
    data = list(Command.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)


# Items

def get_item_sets(request):
    categories = ItemCategory.objects.all().order_by('id')
    data = [{**model_to_dict(category), 'items': list(category.item_set.values().order_by('id'))}
            for category in categories]
    return JsonResponse(data, safe=False)


def get_item_categories(request):
    data = list(ItemCategory.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)


def get_items(request):
    data = list(Item.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)


# Helpers

def get_helper_sets(request):
    groups = HelperGroup.objects.all().order_by('id')
    data = [
      {
        **model_to_dict(group),
        'teams': [{
          **model_to_dict(team),
          'helpers': list(team.helper_set.values().order_by('id'))
        } for team in group.helperteam_set.all().order_by('id')]
      }
      for group in groups
    ]
    return JsonResponse(data, safe=False)


def get_helper_groups(request):
    data = list(HelperGroup.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)

def get_helper_teams(request):
    data = list(HelperTeam.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)

def get_helpers(request):
    data = list(Helper.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)