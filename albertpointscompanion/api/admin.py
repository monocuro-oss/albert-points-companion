from django.contrib import admin

from .models import CommandCategory, Command


admin.site.register(CommandCategory)
admin.site.register(Command)