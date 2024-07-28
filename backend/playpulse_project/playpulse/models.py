from django.db import models

class Sport(models.Model):
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    

class Team(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Player(models.Model):
   first_name = models.CharField(max_length=255)
   last_name = models.CharField(max_length=255)
   position = models.CharField(max_length=50)
   team = models.ForeignKey(Team, on_delete=models.CASCADE)
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)

   def __str__(self):
        return f"{self.first_name} {self.last_name}"
   
class Game(models.Model):
   date = models.DateTimeField()
   home_team = models.ForeignKey(Team, related_name='home_games', on_delete=models.CASCADE)
   away_team = models.ForeignKey(Team, related_name='away_games', on_delete=models.CASCADE)
   sport = models.ForeignKey(Sport, on_delete=models.CASCADE)
   week = models.IntegerField()
   season = models.CharField(max_length=10)
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)

   def __str__(self):
        return f"{self.home_team} vs {self.away_team} on {self.date} (Week {self.week}, {self.season})"
   

class PlayerStats(models.Model):
   player = models.ForeignKey(Player, on_delete=models.CASCADE)
   game = models.ForeignKey(Game, on_delete=models.CASCADE)
   touchdowns = models.IntegerField(default=0)
   passing_yards = models.IntegerField(default=0)
   rushing_yards = models.IntegerField(default=0)
   receiving_yards = models.IntegerField(default=0)
   interceptions = models.IntegerField(default=0)
   tackles = models.IntegerField(default=0)
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)

   def __str__(self):
        return f"Stats for {self.player} in game {self.game}"
   

class TeamStats(models.Model):
   team = models.ForeignKey(Team, on_delete=models.CASCADE)
   game = models.ForeignKey(Game, on_delete=models.CASCADE)
   total_yards = models.IntegerField(default=0)
   passing_yards = models.IntegerField(default=0)
   rushing_yards = models.IntegerField(default=0)
   turnovers = models.IntegerField(default=0)
   penalties = models.IntegerField(default=0)
   penalty_yards = models.IntegerField(default=0)
   created_at = models.DateTimeField(auto_now_add=True)
   updated_at = models.DateTimeField(auto_now=True)


   def __str__(self):
        return f"Stats for {self.team} in game {self.game}"
   

class Query(models.Model):
  query_text = models.TextField()
  response = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)


  def __str__(self):
        return f"Query: {self.query_text}"
  
class FunFact(models.Model):
  ENTITY_CHOICES = [
        ('Sport', 'Sport'),
        ('Team', 'Team'),
        ('Player', 'Player'),
        ('Game', 'Game')
    ]
  entity_type = models.CharField(max_length=10, choices=ENTITY_CHOICES)
  entity_id = models.PositiveIntegerField()
  text = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
        return f"FunFact on {self.entity_type} {self.entity_id}"
