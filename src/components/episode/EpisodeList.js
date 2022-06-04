import React, { useState, useEffect } from 'react';
import { EpisodeCard } from './EpisodeCard';
import { getAllEpisodes, getEpisodeById } from '../../modules/EpisodeManager';

export const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = () => {
    getAllEpisodes().then(episodesFromAPI => {
      setEpisodes(episodesFromAPI)
    });
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return(
    <div className="container-cards">
      {episodes.map(episode =>
        <EpisodeCard key={episode.id} episode={episode} />
      )}
    </div>
  );
};