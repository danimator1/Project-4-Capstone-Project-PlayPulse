from django.shortcuts import render
from rest_framework import generics
from .serializers import SportSerializer, TeamSerializer, PlayerSerializer, GameSerializer, PlayerStatsSerializer, TeamStatsSerializer, QuerySerializer, FunFactSerializer
from .models import Sport, Team, Player, Game, PlayerStats, TeamStats, Query, FunFact
from rest_framework.permissions import AllowAny
from .serializers import FunFactSerializer

class SportList(generics.ListCreateAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class SportDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class TeamList(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class TeamDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class PlayerList(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class GameList(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class PlayerStatsList(generics.ListCreateAPIView):
    queryset = PlayerStats.objects.all()
    serializer_class = PlayerStatsSerializer

class PlayerStatsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlayerStats.objects.all()
    serializer_class = PlayerStatsSerializer

class TeamStatsList(generics.ListCreateAPIView):
    queryset = TeamStats.objects.all()
    serializer_class = TeamStatsSerializer

class TeamStatsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TeamStats.objects.all()
    serializer_class = TeamStatsSerializer

class QueryList(generics.ListCreateAPIView):
    queryset = Query.objects.all()
    serializer_class = QuerySerializer

class QueryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Query.objects.all()
    serializer_class = QuerySerializer

class FunFactList(generics.ListCreateAPIView):
    queryset = FunFact.objects.all()
    serializer_class = FunFactSerializer
    permission_classes = [AllowAny]


class FunFactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FunFact.objects.all()
    serializer_class = FunFactSerializer
    permission_classes = [AllowAny]
    

