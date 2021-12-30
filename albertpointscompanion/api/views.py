from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from django.forms.models import model_to_dict
from django.views.decorators.cache import cache_page

from .models import (
    MarkdownPages,
    CommandCategory,
    Command,
    ItemCategory,
    Item,
)

DEFAULT_CACHE_DURATION = 60 * 5 # seconds

# TODO: All resources are ordered by id but ideally, the order should be maintained separately

# Markdown Pages

AVAILABLE_MD_PAGES = ['home', 'getting_started', 'commands', 'items', 'dungeons']
@cache_page(DEFAULT_CACHE_DURATION)
def get_markdown(request, page_name):
    if page_name not in AVAILABLE_MD_PAGES:
        return HttpResponseNotFound('Document not found')

    page, _ = MarkdownPages.objects.get_or_create(name=page_name)
    return HttpResponse(page.content)


# Commands
@cache_page(DEFAULT_CACHE_DURATION)
def get_command_sets(request):
    categories = CommandCategory.objects.all().order_by('id')
    data = [{**model_to_dict(category), 'commands': list(category.command_set.values().order_by('id'))}
            for category in categories]
    return JsonResponse(data, safe=False)

@cache_page(DEFAULT_CACHE_DURATION)
def get_command_categories(request):
    data = list(CommandCategory.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)

@cache_page(DEFAULT_CACHE_DURATION)
def get_commands(request):
    data = list(Command.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)


# Items
@cache_page(DEFAULT_CACHE_DURATION)
def get_item_sets(request):
    categories = ItemCategory.objects.all().order_by('id')
    data = [{**model_to_dict(category), 'items': list(category.item_set.values().order_by('id'))}
            for category in categories]
    return JsonResponse(data, safe=False)

@cache_page(DEFAULT_CACHE_DURATION)
def get_item_categories(request):
    data = list(ItemCategory.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)

@cache_page(DEFAULT_CACHE_DURATION)
def get_items(request):
    data = list(Item.objects.values().order_by('id'))
    return JsonResponse(data, safe=False)
