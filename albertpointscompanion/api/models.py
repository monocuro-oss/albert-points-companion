from django.db import models

class MarkdownPages(models.Model):
    name = models.CharField(max_length=50, unique=True)
    content = models.TextField(blank=True)

    def __str__(self):
        return self.name

# Commands

class CommandCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Command(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    category = models.ForeignKey(CommandCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


# Items

class ItemCategory(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image_url = models.URLField(blank=True)
    category = models.ForeignKey(ItemCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
