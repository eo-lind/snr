import React from "react"
import "./Episode.css"
import { Link } from "react-router-dom"

export const EpisodeCard = ({ episode, handleDeleteEpisode }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="episode__titleListView">{episode.title}</div>
                <div className="episode__pubDateListView">
                    {episode.publishDate}
                </div>
                <div
                    className="episode__postBodyTruncated"
                    dangerouslySetInnerHTML={{ __html: episode.postBody }}
                 />
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
