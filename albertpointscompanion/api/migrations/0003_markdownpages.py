# Generated by Django 3.2.9 on 2021-11-09 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20211107_0752'),
    ]

    operations = [
        migrations.CreateModel(
            name='MarkdownPages',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('content', models.TextField(blank=True)),
            ],
        ),
    ]
