import React from "react"
import "./Episode.css"
import { Link } from "react-router-dom"

export const EpisodeCard = ({ episode, handleDeleteEpisode }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="episode__title">{episode.title}</h3>
                <div className="episode__pubDate">{episode.publishDate}</div>
                <div className="episode__buttonContainer">
                    <Link to={`/episodes/${episode.id}`}>
                        <button>Details</button>
                    </Link>
                    <button
                        type="button"
                        onClick={() => handleDeleteEpisode(episode.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
