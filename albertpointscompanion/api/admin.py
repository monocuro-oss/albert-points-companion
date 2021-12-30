from django.contrib import admin

from .models import (
    MarkdownPages,
    CommandCategory,
    Command,
    ItemCategory,
    Item,
)

for model in [
    MarkdownPages,
    CommandCategory,
    Command,
    ItemCategory,
    Item,
]:
    admin.site.register(model)
