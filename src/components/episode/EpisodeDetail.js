import React, { useState, useEffect } from "react"
import { getEpisodeById, deleteEpisode } from "../../modules/EpisodeManager"
import { useParams, useNavigate } from "react-router-dom"
import "./EpisodeDetail.css"

export const EpisodeDetail = () => {
    const [episode, setEpisode] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { episodeId } = useParams()
    const navigate = useNavigate()

    const handleDelete = () => {

        setIsLoading(true)
        deleteEpisode(episodeId).then(() => navigate("/episodes"))
    }

    useEffect(() => {
        getEpisodeById(episodeId).then((episode) => {
            setEpisode({
                title: episode.title,
                publishDate: episode.publishDate,
                authorId: episode.authorId,
                audioUrl: episode.audioUrl,
                showNotesUrl: episode.showNotesUrl,
                briefSummaryShowNotes: episode.briefSummaryShowNotes,
                blogGraphicUrl: episode.blogGraphicUrl,
            })
            setIsLoading(false)
        })
    }, [episodeId])

    return (
        <section className="episode">
            <h3 className="episode__title">{episode.title}</h3>
            <div className="episode__publishDate">{episode.publishDate}</div>
            <div className="episode__author">
                {/* TODO: */}
                have to expand fetch call on author id - link to author details
                page
            </div>
            <div className="episode__summary">
                {episode.briefSummaryShowNotes}
            </div>
            {/* TODO: Implement optional chaining later on the relevant details
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
             */}
            {/* <div className="episode__location">
                Location: {episode.location?.name}
            </div> */}
            {/* TODO:
            <div className="episode__tags">
                 
                have to expand fetch call on tag join table; probably need to look and see if there's a simple way to handle post tags. Keep hidden for now and just store tag objects for future use.
            </div>*/}
            {/* TODO: remove this button later */}
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Delete
            </button>
        </section>
    )
}