from django.contrib import admin
from .models import Meme
from django.db import models

@admin.register(Meme)
class MemeAdmin(admin.ModelAdmin):
    ...