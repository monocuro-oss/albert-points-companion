from django.contrib import admin

from .models import (
    CommandCategory,
    Command,
    ItemCategory,
    Item,
    HelperGroup,
    HelperTeam,
    Helper
)

for model in [
    CommandCategory,
    Command,
    ItemCategory,
    Item,
    HelperGroup,
    HelperTeam,
    Helper
]:
    admin.site.register(model)
