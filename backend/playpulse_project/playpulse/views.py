from django.shortcuts import render
from rest_framework import generics
from .serializers import SportSerializer, TeamSerializer, PlayerSerializer, GameSerializer, PlayerStatsSerializer, TeamStatsSerializer, QuerySerializer, FunFactSerializer
from .models import Sport, Team, Player, Game, PlayerStats, TeamStats, Query, FunFact
from rest_framework.permissions import AllowAny
from .serializers import FunFactSerializer
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

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

    def get_queryset(self):
        entity_type = self.request.query_params.get('entity_type')
        entity_id = self.request.query_params.get('entity_id')

        if not entity_type or not entity_id:
            return FunFact.objects.none()
        if entity_type not in dict(FunFact.ENTITY_CHOICES).keys():
            raise NotFound("Invalid entity type")

        return FunFact.objects.filter(entity_type=entity_type, entity_id=entity_id)


class FunFactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = FunFact.objects.all()
    serializer_class = FunFactSerializer
    permission_classes = [AllowAny]
    

