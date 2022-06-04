import React from "react"
import "./Episode.css"

export const EpisodeCard = ({ episode, handleDeleteEpisode }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="episode__title">Hi, I'm the episode title!</h3>
                <div className="episode__pubDate">December 26, 2021</div>
                <div className="episode__author">Olivia Lind</div>
                <div className="episode__summary">
                    I am the episode summary. Read me. Memorize me. BOW DOWN TO
                    ME. Rupert, Rupert, some more Rupert. Read me. Memorize me.
                    BOW DOWN TO ME. Rupert, Rupert, some more Rupert. Read me.
                    Memorize me. BOW DOWN TO ME. Rupert, Rupert, some more
                    Rupert. Read me. Memorize me. BOW DOWN TO ME. Rupert,
                    Rupert, some more Rupert.
                </div>
                <div className="episode__tags">
                    tag, tag, tag, tag, tag, tag, tag, tag, tag, tag, tag, tag
                </div>
                {/* TODO: will probably have to get rid of delete button eventually */}
                <button
                    type="button"
                    onClick={() => handleDeleteEpisode(episode.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
