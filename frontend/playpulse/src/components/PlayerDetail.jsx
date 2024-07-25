import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

export default function PlayerDetail() {
  const [player, setPlayer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes/${id}?lang=en&region=us`);
        setPlayer(response.data);
      } catch (error) {
        console.error('Error fetching player details:', error);
      }
    };

    fetchPlayer();
  }, [id]);

  return player ? (
    <div className="detail">
      <h3>{player.fullName}</h3>
      <img src={player.headshot.href} alt={player.fullName} />
      <p>Position: {player.position.displayName}</p>
      <p>Height: {player.displayHeight}</p>
      <p>Weight: {player.displayWeight}</p>
      <p>Age: {player.age}</p>
      <p>Birthplace: {player.birthPlace.city}, {player.birthPlace.state}</p>
      <Link to="/playerlist">Return to Player List</Link>
    </div>
  ) : (
    <h3>Finding Player...</h3>
  );
}
