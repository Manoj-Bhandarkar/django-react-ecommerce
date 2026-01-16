from django.contrib import admin
from userauth.models import Profile, User

class UserAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email','phone']

class ProfileAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'gender','country']
    #list_editable = ['gender','country']
        

admin.site.register(Profile, ProfileAdmin)
admin.site.register(User, UserAdmin)