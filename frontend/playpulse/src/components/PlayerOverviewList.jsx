import { useState, useEffect } from "react";
import axios from "axios";

export default function TeamList() {
  const [overviews, setOverviews] = useState([]);

  useEffect(() => {
    const getOverviews = async () => {
      try {
        const response = await axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/14876/overview`);
        setOverviews(response.data.news || []);
      } catch (error) {
        console.error("Error fetching overviews:", error);
      }
    };
    getOverviews();
  }, []);

  return (
    <div className="team-list">
      <h2>Player News</h2>
      {overviews.map((overview, index) => (
        <div key={index} className="card">
          {overview.links && overview.links.web ? (
            <ul>
              <li>
                <a href={overview.links.web.href} target="_blank" rel="noopener noreferrer">
                  {overview.headline}
                </a>
              </li>
            </ul>
          ) : (
            <p>No additional links available</p>
          )}
        </div>
      ))}
    </div>
  );
}
