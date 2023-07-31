from django.conf import settings
from django.db import models
class Cddfs(models.Model):
    'Generated Model'
    cnvbvn = models.BigIntegerField()
    tryr = models.BigIntegerField()
class Zass(models.Model):
    'Generated Model'
    cbcnc = models.ForeignKey("home.Cddfs",on_delete=models.SET_DEFAULT,default="Test",related_name="zass_cbcnc",)
