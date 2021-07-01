from django.db import models

# Create your models here.
class product(models.Model):
    Name=models.CharField(max_length=50)
    price=models.FloatField(max_length=5)
    discription=models.CharField(max_length=1000)
    image=models.ImageField(upload_to='images/')
    def __str__(self):
        return self.Name

