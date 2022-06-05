import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addEpisode } from "../../modules/EpisodeManager"
import { getAllAuthors } from "../../modules/AuthorManager"
import "./EpisodeForm.css"

// ! FIXME: figure out how to require fields
// TODO store tags on the object?
// TODO should I separate out and use actual URLs for the social media posts?
// TODO show remaining characters on character limited captions
// TODO: move these things to issue tickets

export const EpisodeForm = () => {
    const [episode, setEpisode] = useState({
        title: "",
        publishDate: "",
        authorId: 1,
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

    // TODO form fields to add:
    // author dropdown REQUIRED

    const [isLoading, setIsLoading] = useState(false)

    // TODO: FIXME: update the stuff below for dropdown selectors

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

    // TODO: FIXME: see above re: dropdowns
    // useEffect(() => {
    //     //load author data and setState
    // }, [])

    const handleClickSaveEpisode = (event) => {
        event.preventDefault()

        addEpisode(episode).then(() => navigate("/episodes"))

        // FIXME: once the stuff below is done, the add episode line above can be deleted
        // TODO: see above re: dropdowns
        // const authorId = episode.authorId
        // const customerId = episode.customerId

        // TODO: see above re: dropdowns
        // if (authorId === 0 || customerId === 0) {
        //     window.alert("Please select a author and a customer")
        // } else {
        //     //invoke addEpisode passing episode as an argument.
        //     //once complete, change the url and display the episode list
        //     addEpisode(episode).then(() => navigate("/episodes"))
        // }
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

                {/* FIXME: ---------------datepicker--------------- */}
                {/* <div className="form-group">
                    <label htmlFor="date">Published:</label>
                    <br />
                    <input
                        size="50"
                        type="date"
                        id="date"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        value={episode.publishDate}
                    />
                </div> */}

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

                {/* TODO: FIXME: For dropdowns - author, Tags? */}
                {/* <div className="form-group">
                    <label htmlFor="author">Assign to author:</label>
                    <br />
                    <select
                        value={episode.authorId}
                        name="authorId"
                        id="authorId"
                        onChange={handleControlledInputChange}
                        className="form-control"
                    >
                        <option value="0">Select a author</option>
                        {authors.map((l) => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customerId">Customer:</label>
                    <br />
                    <select
                        value={episode.customerId}
                        name="customer"
                        id="customerId"
                        onChange={handleControlledInputChange}
                        className="form-control"
                    >
                        <option value="0">Select a customer</option>
                        {customers.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div> */}
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
