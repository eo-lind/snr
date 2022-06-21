import React, { useState, useEffect } from 'react';
import { EpisodeCard } from './EpisodeCard';
import { getAllEpisodes } from '../../modules/EpisodeManager';
import { useNavigate } from "react-router-dom"

export const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);
  const navigate = useNavigate()

  const getEpisodes = () => {
    getAllEpisodes().then(episodesFromAPI => {
      setEpisodes(episodesFromAPI)
    });
  };

//   const handleDeleteEpisode = (id) => {
//       deleteEpisode(id).then(() => getAllEpisodes().then(setEpisodes))
//   }

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
      <>
      {/* TODO: will eventually need to remove button... maybe create some sort of private CMS? */}
          {/* <section className="section-content">
              <button
                  type="button"
                  className="btn"
                  onClick={() => {
                      navigate("/episodes/create")
                  }}
              >
                  Add Episode
              </button>
          </section> */}
          <div className="container-cards">
              {episodes.map((episode) => (
                  <EpisodeCard
                      key={episode.id}
                      episode={episode}
                    //   handleDeleteEpisode={handleDeleteEpisode}
                  />
              ))}
          </div>
      </>
  )

};