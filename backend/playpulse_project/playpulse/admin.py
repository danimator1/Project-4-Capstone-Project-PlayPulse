from django.contrib import admin
from .models import Sport, Team, Player, Game, PlayerStats, TeamStats, Query, FunFact

admin.site.register(Sport)
admin.site.register(Team)
admin.site.register(Player)
admin.site.register(Game)
admin.site.register(PlayerStats)
admin.site.register(TeamStats)
admin.site.register(Query)
admin.site.register(FunFact)
