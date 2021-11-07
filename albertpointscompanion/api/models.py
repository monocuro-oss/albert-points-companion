from django.db import models

class CommandCategory(models.Model):
    name = models.CharField(max_length=30)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Command(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    category = models.ForeignKey(CommandCategory, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
