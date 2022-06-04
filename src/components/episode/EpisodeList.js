import React, { useState, useEffect } from 'react';
import { EpisodeCard } from './EpisodeCard';
import { getAllEpisodes, getEpisodeById, deleteEpisode } from '../../modules/EpisodeManager';

export const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  const getEpisodes = () => {
    getAllEpisodes().then(episodesFromAPI => {
      setEpisodes(episodesFromAPI)
    });
  };

  const handleDeleteEpisode = (id) => {
      deleteEpisode(id).then(() => getAllEpisodes().then(setEpisodes))
  }

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
      <div className="container-cards">
          {episodes.map((episode) => (
              <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  handleDeleteEpisode={handleDeleteEpisode}
              />
          ))}
      </div>
  )

};