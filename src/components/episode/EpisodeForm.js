import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addEpisode } from "../../modules/EpisodeManager"
import { getAllAuthors } from "../../modules/AuthorManager"
import "./EpisodeForm.css"

export const EpisodeForm = () => {
    const [episode, setEpisode] = useState({
        title: "",
        publishDate: new Date(),
        authorId: 0,
        audioUrl: "",
        showNotesUrl: "",
        briefSummaryShowNotes: "",
        blogGraphicUrl: "",
        fbEpReleasePostText: "",
        fbEpReleaseImageUrl: "",
        igEpReleasePostText: "",
        igEpReleasePostImageUrl: "",
        twitterEpReleasePostText: "",
        twitterEpReleasePostImageUrl: "",
        igAndFbStoryImageUrl: "",
        fbSourcesPostText: "",
        twitterSourcesPostText: "",
        tikTokIgFbReelVideoUrl: "",
        tikTokIgFbReelVideoCaption: "",
    })

    const [isLoading, setIsLoading] = useState(false)
    const [authors, setAuthors] = useState([])

    const navigate = useNavigate()

    const handleControlledInputChange = (event) => {
        const newEpisode = { ...episode }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }

        newEpisode[event.target.id] = selectedVal

        setEpisode(newEpisode)
    }

    useEffect(() => {
        getAllAuthors().then((authors) => {
            setAuthors(authors)
        });
    }, [authors])

    const handleClickSaveEpisode = (event) => {
        event.preventDefault()

        const authorId = episode.authorId

        if (authorId === 0) {
            window.alert("Please select an author ")
        } 
        else {
            addEpisode(episode).then(() => navigate("/episodes"))
        }
    }

    return (
        <form className="episodeForm">
            <h2 className="episodeForm__title">Add Episode</h2>
            <fieldset>
                <h3>Show Notes</h3>

                {/* ---------------title--------------- */}
                <div className="form-group">
                    <label htmlFor="title">Episode Title:</label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="title"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Title"
                        value={episode.title}
                    />
                </div>

                {/* ---------------Brief Description--------------- */}
                <div className="form-group">
                    <label htmlFor="briefSummary">Episode Summary:</label>
                    <br />
                    <textarea
                        rows="10"
                        cols="50"
                        name="briefSummaryShowNotes"
                        id="briefSummaryShowNotes"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Summary"
                        value={episode.briefSummaryShowNotes}
                    />
                </div>

                <h5>Can Be Added Later:</h5>

                {/* ---------------audio url--------------- */}
                <div className="form-group">
                    <label htmlFor="audioUrl">Episode Audio:</label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="audioUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={episode.audioUrl}
                    />
                </div>

                {/* ---------------show notes graphic URL--------------- */}
                <div className="form-group">
                    <label htmlFor="blogGraphicUrl">Episode Graphic:</label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="blogGraphicUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={episode.blogGraphicUrl}
                    />
                </div>

                {/* ---------------show notes Url--------------- */}
                <div className="form-group">
                    <label htmlFor="showNotesUrl">Show Notes URL:</label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="showNotesUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={episode.showNotesUrl}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Choose Author:</label>
                    <br />
                    <select
                        value={episode.authorId}
                        name="authorId"
                        id="authorId"
                        onChange={handleControlledInputChange}
                        className="form-control"
                    >
                        <option value="0">Select an author</option>
                        {authors.map((singleAuthor) => (
                            <option
                                key={singleAuthor.id}
                                value={singleAuthor.id}
                            >
                                {singleAuthor.authorFirst}{" "}
                                {singleAuthor.authorLast}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            {/* ---------------SOCIAL MEDIA FIELDS--------------- */}
            <fieldset>
                <h3>Social Media</h3>
                <h4>Episode Release Posts</h4>

                {/* ---------------Facebook episode release post--------------- */}
                <div className="form-group">
                    <label htmlFor="fbEpReleasePostText">
                        Facebook Post (Episode Release):
                    </label>
                    <br />
                    <textarea
                        rows="4"
                        cols="50"
                        name="fbEpReleasePostText"
                        id="fbEpReleasePostText"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Summary"
                        value={episode.fbEpReleasePostText}
                    />
                </div>

                {/* ---------------Facebook episode release post image URL--------------- */}
                <div className="form-group">
                    <label htmlFor="fbEpReleaseImageUrl">
                        Facebook Post Image (Episode Release):
                    </label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="fbEpReleaseImageUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={episode.fbEpReleaseImageUrl}
                    />
                </div>

                {/* ---------------Instagram episode release post--------------- */}
                <div className="form-group">
                    <label htmlFor="igEpReleasePostText">
                        Instagram Post (Episode Release):
                    </label>
                    <br />
                    <textarea
                        rows="4"
                        cols="50"
                        name="igEpReleasePostText"
                        id="igEpReleasePostText"
                        onChange={handleControlledInputChange}
                        maxLength="2200"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Summary"
                        value={episode.igEpReleasePostText}
                    />
                </div>

                {/* ---------------Instagram episode release post image URL--------------- */}
                <div className="form-group">
                    <label htmlFor="igEpReleasePostImageUrl">
                        Instagram Post Image (Episode Release):
                    </label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="igEpReleasePostImageUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={episode.igEpReleasePostImageUrl}
                    />
                </div>

                {/* ---------------Twitter episode release post--------------- */}
                <div className="form-group">
                    <label htmlFor="twitterEpReleasePostText">
                        Twitter Post (Episode Release):
                    </label>
                    <br />
                    <textarea
                        rows="4"
                        cols="50"
                        name="twitterEpReleasePostText"
                        id="twitterEpReleasePostText"
                        onChange={handleControlledInputChange}
                        maxLength="280"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Summary"
                        value={episode.twitterEpReleasePostText}
                    />
                </div>

                {/* ---------------Twitter episode release post image URL--------------- */}
                <div className="form-group">
                    <label htmlFor="igEpReleasePostImageUrl">
                        Twitter Post Image (Episode Release):
                    </label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="igEpReleasePostImageUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={episode.igEpReleasePostImageUrl}
                    />
                </div>

                <h4>Reels &amp; Stories</h4>

                {/* ---------------TikTok + Instagram & Facebook Reels caption--------------- */}
                <div className="form-group">
                    <label htmlFor="tikTokIgFbReelVideoCaption">
                        Caption (TikTok &plus; Instagram &amp; Facebook Reels):
                    </label>
                    <br />
                    <textarea
                        rows="4"
                        cols="50"
                        name="tikTokIgFbReelVideoCaption"
                        id="tikTokIgFbReelVideoCaption"
                        onChange={handleControlledInputChange}
                        maxLength="300"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Summary"
                        value={episode.tikTokIgFbReelVideoCaption}
                    />
                </div>

                {/* ---------------TikTok + Instagram & Facebook Reels video URL--------------- */}
                <div className="form-group">
                    <label htmlFor="tikTokIgFbReelVideoUrl">
                        Video URL (TikTok &plus; Instagram &amp; Facebook
                        Reels):
                    </label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="tikTokIgFbReelVideoUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={episode.tikTokIgFbReelVideoUrl}
                    />
                </div>

                {/* ---------------Instagram & Facebook story image URL--------------- */}
                <div className="form-group">
                    <label htmlFor="igAndFbStoryImageUrl">
                        Story Image URL (Instagram &amp; Facebook):
                    </label>
                    <br />
                    <input
                        size="50"
                        type="text"
                        id="igAndFbStoryImageUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="URL"
                        value={episode.igAndFbStoryImageUrl}
                    />
                </div>

                <h4>Episode Sources Posts</h4>

                {/* ---------------Facebook Sources Post--------------- */}
                <div className="form-group">
                    <label htmlFor="fbSourcesPostText">
                        Sources Post (Facebook):
                    </label>
                    <br />
                    <textarea
                        rows="4"
                        cols="50"
                        name="fbSourcesPostText"
                        id="fbSourcesPostText"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Post Text"
                        value={episode.fbSourcesPostText}
                    />
                </div>

                {/* ---------------Twitter Sources Post--------------- */}
                <div className="form-group">
                    <label htmlFor="twitterSourcesPostText">
                        Sources Post (Twitter):
                    </label>
                    <br />
                    <textarea
                        rows="4"
                        cols="50"
                        name="twitterSourcesPostText"
                        id="twitterSourcesPostText"
                        onChange={handleControlledInputChange}
                        maxLength="300"
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Post Text"
                        value={episode.twitterSourcesPostText}
                    />
                </div>
            </fieldset>
            <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickSaveEpisode}
            >
                Save Episode
            </button>
        </form>
    )
}
