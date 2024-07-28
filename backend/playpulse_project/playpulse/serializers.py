from rest_framework import serializers
from .models import Sport, Team, Player, Game, PlayerStats, TeamStats, Query, FunFact

class SportSerializer(serializers.HyperlinkedModelSerializer):
    sport_url = serializers.ModelSerializer.serializer_url_field(
        view_name='sport-detail'
    )
    
    class Meta:
        model = Sport
        fields = ('id', 'sport_url', 'url', 'name', 'created_at', 'updated_at')


class TeamSerializer(serializers.HyperlinkedModelSerializer):
    sport = serializers.HyperlinkedRelatedField(
        view_name='sport-detail',
        read_only=True
    )
    sport_id = serializers.PrimaryKeyRelatedField(
        queryset=Sport.objects.all(),
        source='sport'
    )
    team_url = serializers.ModelSerializer.serializer_url_field(
        view_name='team-detail'
    )

    class Meta:
        model = Team
        fields = ('id', 'team_url', 'url', 'name', 'city', 'sport', 'sport_id', 'created_at', 'updated_at')


class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    team = serializers.HyperlinkedRelatedField(
        view_name='team-detail',
        read_only=True
    )
    team_id = serializers.PrimaryKeyRelatedField(
        queryset=Team.objects.all(),
        source='team'
    )
    player_url = serializers.ModelSerializer.serializer_url_field(
        view_name='player-detail'
    )

    class Meta:
        model = Player
        fields = ('id', 'player_url', 'url', 'first_name', 'last_name', 'position', 'team', 'team_id', 'created_at', 'updated_at')


class GameSerializer(serializers.HyperlinkedModelSerializer):
    home_team = serializers.HyperlinkedRelatedField(
        view_name='team-detail',
        read_only=True
    )
    away_team = serializers.HyperlinkedRelatedField(
        view_name='team-detail',
        read_only=True
    )
    sport = serializers.HyperlinkedRelatedField(
        view_name='sport-detail',
        read_only=True
    )
    home_team_id = serializers.PrimaryKeyRelatedField(
        queryset=Team.objects.all(),
        source='home_team'
    )
    away_team_id = serializers.PrimaryKeyRelatedField(
        queryset=Team.objects.all(),
        source='away_team'
    )
    sport_id = serializers.PrimaryKeyRelatedField(
        queryset=Sport.objects.all(),
        source='sport'
    )
    game_url = serializers.ModelSerializer.serializer_url_field(
        view_name='game-detail'
    )

    class Meta:
        model = Game
        fields = ('id', 'game_url', 'url', 'date', 'home_team', 'away_team', 'sport', 'home_team_id', 'away_team_id', 'sport_id', 'week', 'season', 'created_at', 'updated_at')


class PlayerStatsSerializer(serializers.HyperlinkedModelSerializer):
    player = serializers.HyperlinkedRelatedField(
        view_name='player-detail',
        read_only=True
    )
    game = serializers.HyperlinkedRelatedField(
        view_name='game-detail',
        read_only=True
    )
    player_id = serializers.PrimaryKeyRelatedField(
        queryset=Player.objects.all(),
        source='player'
    )
    game_id = serializers.PrimaryKeyRelatedField(
        queryset=Game.objects.all(),
        source='game'
    )
    player_stats_url = serializers.ModelSerializer.serializer_url_field(
        view_name='playerstats-detail'
    )

    class Meta:
        model = PlayerStats
        fields = ('id', 'player_stats_url', 'url', 'player', 'game', 'player_id', 'game_id', 'touchdowns', 'passing_yards', 'rushing_yards', 'receiving_yards', 'interceptions', 'tackles', 'created_at', 'updated_at')


class TeamStatsSerializer(serializers.HyperlinkedModelSerializer):
    team = serializers.HyperlinkedRelatedField(
        view_name='team-detail',
        read_only=True
    )
    game = serializers.HyperlinkedRelatedField(
        view_name='game-detail',
        read_only=True
    )
    team_id = serializers.PrimaryKeyRelatedField(
        queryset=Team.objects.all(),
        source='team'
    )
    game_id = serializers.PrimaryKeyRelatedField(
        queryset=Game.objects.all(),
        source='game'
    )
    team_stats_url = serializers.ModelSerializer.serializer_url_field(
        view_name='teamstats-detail'
    )

    class Meta:
        model = TeamStats
        fields = ('id', 'team_stats_url', 'url', 'team', 'game', 'team_id', 'game_id', 'total_yards', 'passing_yards', 'rushing_yards', 'turnovers', 'penalties', 'penalty_yards', 'created_at', 'updated_at')


class QuerySerializer(serializers.HyperlinkedModelSerializer):
    query_url = serializers.ModelSerializer.serializer_url_field(
        view_name='query-detail'
    )

    class Meta:
        model = Query
        fields = ('id', 'query_url', 'url', 'query_text', 'response', 'created_at', 'updated_at')


class FunFactSerializer(serializers.HyperlinkedModelSerializer):
    funfact_url = serializers.ModelSerializer.serializer_url_field(
        view_name='funfact-detail'
    )

    class Meta:
        model = FunFact
        fields = ('id', 'funfact_url', 'url', 'entity_type', 'entity_id', 'text', 'created_at', 'updated_at')
