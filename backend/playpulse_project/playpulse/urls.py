from django.urls import path, include
from .views import SportList, SportDetail, TeamList, TeamDetail, PlayerList, PlayerDetail, GameList, GameDetail, PlayerStatsList, PlayerStatsDetail, TeamStatsList, TeamStatsDetail, QueryList, QueryDetail, FunFactList, FunFactDetail
from rest_framework.routers import DefaultRouter
from .views import FunFactList


router = DefaultRouter()
router.register(r'funfacts', FunFactList)

urlpatterns = [   
    path('sports/<int:pk>/', SportDetail.as_view(), name='sport-detail'),
    path('teams/', TeamList.as_view(), name='team-list'),
    path('teams/<int:pk>/', TeamDetail.as_view(), name='team-detail'),
    path('players/', PlayerList.as_view(), name='player-list'),
    path('players/<int:pk>/', PlayerDetail.as_view(), name='player-detail'),
    path('games/', GameList.as_view(), name='game-list'),
    path('games/<int:pk>/', GameDetail.as_view(), name='game-detail'),
    path('playerstats/', PlayerStatsList.as_view(), name='playerstats-list'),
    path('playerstats/<int:pk>/', PlayerStatsDetail.as_view(), name='playerstats-detail'),
    path('teamstats/', TeamStatsList.as_view(), name='teamstats-list'),
    path('teamstats/<int:pk>/', TeamStatsDetail.as_view(), name='teamstats-detail'),
    path('queries/', QueryList.as_view(), name='query-list'),
    path('queries/<int:pk>/', QueryDetail.as_view(), name='query-detail'),
     path('funfacts/', FunFactList.as_view(), name='funfact-list'),
     path('funfacts/', FunFactList.as_view(), name='fun_facts_list'),
    path('funfacts/<int:pk>/', FunFactDetail.as_view(), name='funfact-detail'),
]
