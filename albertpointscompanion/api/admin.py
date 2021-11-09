from django.contrib import admin

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

for model in [
    MarkdownPages,
    CommandCategory,
    Command,
    ItemCategory,
    Item,
    HelperGroup,
    HelperTeam,
    Helper
]:
    admin.site.register(model)
