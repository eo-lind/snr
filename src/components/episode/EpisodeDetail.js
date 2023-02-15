import React, { useState, useEffect } from "react"
import { getEpisodeById, deleteEpisode } from "../../modules/EpisodeManager"
import { getVideoByEpisodeId } from "../../modules/VideoManager"
import { getImageByEpisodeId } from "../../modules/ImageManager"
import { getAudioByEpisodeId } from "../../modules/AudioManager"
import { useParams, useNavigate } from "react-router-dom"
import ImageGallery from "react-image-gallery"
import "./EpisodeDetail.css"
import "./ImageGallery.css"

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
                authorNameFirst: episode.author.nameFirst,
                authorNameLast: episode.author.nameLast,
                postBody: episode.postBody,
                sources: episode.sources,
                musicCredits: episode.musicCredits,
            })
            setIsLoading(false)
        })
    }, [episodeId])

    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideoByEpisodeId(episodeId).then((videosFromAPI) => {
            setVideos(videosFromAPI)
        })
    }, [episodeId])

    const [images, setImages] = useState([])

    useEffect(() => {
        getImageByEpisodeId(episodeId).then((imagesFromAPI) => {
            setImages(imagesFromAPI)
        })
    }, [episodeId])

    const [audio, setAudio] = useState([])

    useEffect(() => {
        getAudioByEpisodeId(episodeId).then((audioFromAPI) => {
            setAudio(audioFromAPI)
        })
    }, [episodeId])

    const createSpreakerEpId = (spreakerEpId) => {
        let episode = ""
        episode = "episode_id=" + spreakerEpId
        return episode
    }

    const episodeImageGallery = () => {
            return <ImageGallery items={images} />
    }


    return (
        <>
            <section className="episode">
                <h3 className="episode__title">{episode.title}</h3>
                <div className="episode__author">
                    {/* TODO: LATER link to author details page*/}
                    {episode.authorNameFirst} {episode.authorNameLast}
                </div>
                <div className="episode__publishDate">
                    {episode.publishDate}
                </div>
                <div
                    className="episode__post"
                    dangerouslySetInnerHTML={{ __html: episode.postBody }}
                />
                {episodeImageGallery()}
                {/* FIXME: embeded player isn't showing -- script tag is at the end of the <body> in index.html */}
                <div className="episode__audioEmbed">
                    {audio.map((audio) => (
                        <a
                            className="spreaker-player"
                            href={audio.audioUrl}
                            data-resource={createSpreakerEpId(
                                audio.spreakerEpId
                            )}
                            data-width="100%"
                            data-height="200px"
                            data-theme="light"
                            data-playlist="false"
                            data-playlist-continuous="false"
                            data-chapters-image="true"
                            data-episode-image-position="right"
                            data-hide-logo="false"
                            data-hide-likes="false"
                            data-hide-comments="true"
                            data-hide-sharing="false"
                            data-hide-download="true"
                            data-color="f78da7"
                        >
                            Listen to "{episode.title} {audio.audioSequence} on
                            Spreaker.
                        </a>
                    ))}
                </div>
                {/* old image gallery code TODO: save somewhere */}
                {/* <div className="episode__imageGallery">
                    {images.map((image) => (
                        <div className="episode__imageContainer">
                            <img
                                className="episode__individualImage"
                                src={image.imgUrl}
                                alt={image.altText}
                            />
                            <caption className="episode__imageGalleryCaptions">
                                {image.caption} (
                                <a
                                    href={image?.sourceUrl}
                                    target="_blank"
                                    className="episode__imageGallerySourceLink"
                                >
                                    {image?.sourceText}
                                </a>
                                )
                            </caption>
                        </div>
                    ))}
                </div> */}
                <div className="episode__videoGallery">
                    {videos.map((video) => (
                        <iframe
                            className="episode__individualVideo"
                            width="330"
                            height="207"
                            src={video.videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ))}
                </div>
                <details>
                    <summary>
                        Expand for research sources and music credits
                    </summary>
                    <h5 id="episode__sourcesHeading">Sources</h5>
                    <div
                        className="episode__sources"
                        dangerouslySetInnerHTML={{ __html: episode.sources }}
                    />
                    <h5 id="episode__imageSourcesHeading">Images</h5>
                    <div className="episode__imageSources">
                        <ul className="episode__imageSources">
                            {images.map((image) => (
                                <li>
                                    {image.caption} - (
                                    <a
                                        href={image?.sourceUrl}
                                        target="_blank"
                                    >
                                        {image?.sourceText}
                                    </a>
                                    )
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h5 id="episode__musicSourcesHeading">Music</h5>
                    <div
                        className="episode__musicCredits"
                        dangerouslySetInnerHTML={{
                            __html: episode.musicCredits,
                        }}
                    />
                </details>
                {/* TODO: Add tags */}
                <button
                    type="button"
                    className="snrBtn"
                    disabled={isLoading}
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </section>
        </>
    )
}