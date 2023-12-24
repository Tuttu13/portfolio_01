from django.db import models
from django.core.exceptions import ValidationError 

# バリデーションチェッククラス
# class User_validators():

#     def check_value(value, min_length=None, max_length=None):
        
#         if isinstance(value, type(int)):
            
#             raise ValidationError()

#         if min_length < value < max_length  is True:
        
#             raise ValidationError()


# Create your models here.
class User(models.Model):
    user_id = models.IntegerField(max_length=50, validators=[])
    name = models.CharField(max_length=500)
    user_info = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Entry(models.Model):
    STATUS_DRAFT = "draft"
    STATUS_PUBLIC = "public"
    STATUS_SET = (
            (STATUS_DRAFT, "下書き"),
            (STATUS_PUBLIC, "公開中"),
    )
    title = models.CharField(max_length=128)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(choices=STATUS_SET, default=STATUS_DRAFT, max_length=8)
    author = models.ForeignKey(User, related_name='entries', on_delete=models.CASCADE)