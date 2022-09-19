import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addEpisode } from "../../modules/EpisodeManager"
import { getAllAuthors } from "../../modules/AuthorManager"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import "./EpisodeForm.css"

export const EpisodeForm = () => {
    // ===================================================================================
    //                                     DATE HANDLING
    // ===================================================================================
    // let today = new Date()
    // let dd = String(today.getDate()).padStart(2, "0")
    // let mm = String(today.getMonth() + 1).padStart(2, "0") January is 0
    // let yyyy = today.getFullYear()

    // today = mm + "/" + dd + "/" + yyyy

    const [bodyText, setBodyText] = useState("")
    const [episode, setEpisode] = useState({
        title: "",
        publishDate: /* `${today}` */ "",
        authorId: 0,
        postBody: "",
        sources: "",
        musicCredits:
            "Theme music written and performed by Preston Garland. If you'd like more information or your own theme song, send an email to preston.garland@gmail.com",
        showNotesUrl: "",
        epReleaseTextFbPost: "",
        epReleaseTextIgPost: "",
        epReleaseTextTwitterPost: "",
        seeSourcesTextFbPost: "",
        seeSourcesTextTwitterPost: "",
        epReleaseGraphicCreatedWebsite: false,
        epReleaseGraphicCreatedFb: false,
        epReleaseGraphicCreatedIg: false,
        epReleaseGraphicCreatedTwitter: false,
        epReleaseGraphicCreatedYouTubeThumbnail: false,
        epReleaseGraphicCreatedIgFbStories: false,
        epReleaseVideoCreatedIgFbTikTokReels: false,
        epReleaseVideoCreatedYouTube: false,
        later: "tags: ",
    })

    const [isLoading, setIsLoading] = useState(false)
    const [authors, setAuthors] = useState([])

    const navigate = useNavigate()

    const handleControlledInputChange = (event, data) => {
        const newEpisode = { ...episode }
        const newBodyText = { ...bodyText }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEpisode[event.target.id] = selectedVal
        console.log("event ", event.target.id)
        setEpisode(newEpisode)
    }

    console.log(episode.postBody)

    useEffect(() => {
        getAllAuthors().then((authors) => {
            setAuthors(authors)
        })
    }, [])

    const handleClickSaveEpisode = (event) => {
        event.preventDefault()

        const authorId = episode.authorId

        if (authorId === 0) {
            window.alert("Please select an author ")
        } else {
            addEpisode(episode).then(() => navigate("/episodes"))
        }
    }

    return (
        <form className="episodeForm">
            <h2 className="episodeForm__title">Add Episode</h2>
            <fieldset>
                {/* 
          ===================================================================================
                                         SHOW NOTES SECTION
          ===================================================================================
          */}
                <h3>Show Notes</h3>
                {/* ---------------title--------------- */}
                <div className="form-group">
                    <label className="episodeForm__labelText" htmlFor="title">
                        Episode Title:
                    </label>
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
                    <label
                        className="episodeForm__labelText"
                        htmlFor="postBody"
                    >
                        Episode Summary:
                    </label>
                    <br />
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setBodyText(data)
                        }}
                    />
                    {/* <textarea
                        rows="10"
                        cols="50"
                        name="postBody"
                        id="postBody"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        placeholder="Summary"
                        value={episode.postBody}
                    /> */}
                </div>
                {/* ---------------Sources--------------- */}
                <div className="form-group">
                    <label className="episodeForm__labelText" htmlFor="sources">
                        Episode Sources:
                    </label>
                    <br />

                    <textarea
                        rows="10"
                        cols="50"
                        name="sources"
                        id="sources"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        placeholder="Sources"
                        value={episode.sources}
                    />
                </div>
                {/* ---------------Music Credits--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="musicCredits"
                    >
                        Music Credits:
                    </label>
                    <br />

                    <textarea
                        rows="10"
                        cols="50"
                        name="musicCredits"
                        id="musicCredits"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        placeholder="Music Credits"
                        value={episode.musicCredits}
                    />
                </div>
                {/* TODO: */}
                {/* ---------------audio url--------------- */}
                {/* <div className="form-group">
                     <label className="episodeForm__labelText" htmlFor="audioUrl">Episode Audio:</label>
                     <br />

                     <input
                         size="50"
                         type="text"
                         id="audioUrl"
                         onChange={handleControlledInputChange}
                         required
                         className="form-control"
                         placeholder="URL"
                         value={episode.audioUrl}
                     />
                 </div> */}
                {/* ---------------show notes Url--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="showNotesUrl"
                    >
                        Show Notes URL:
                    </label>
                    <br />

                    <input
                        size="50"
                        type="text"
                        id="showNotesUrl"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        placeholder="URL"
                        value={episode.showNotesUrl}
                    />
                </div>
                <div className="form-group">
                    <label className="episodeForm__labelText" htmlFor="author">
                        Choose Author:
                    </label>
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
                                {singleAuthor.nameFirst} {singleAuthor.nameLast}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            {/*
             ===================================================================================
                                             SOCIAL MEDIA SECTION
             ===================================================================================
             */}

            <fieldset>
                <h3>Social Media</h3>

                {/* 
                 ---------------------------------------------------------------------------
                                             EPISODE RELEASE
                 ---------------------------------------------------------------------------
                 */}
                <h4>Episode Release Posts</h4>
                {/* ---------------Facebook episode release post--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="epReleaseTextFbPost"
                    >
                        Facebook Post (Episode Release):
                    </label>
                    <br />

                    <textarea
                        rows="4"
                        cols="50"
                        name="epReleaseTextFbPost"
                        id="epReleaseTextFbPost"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        placeholder="Summary"
                        value={episode.epReleaseTextFbPost}
                    />
                </div>

                {/* ---------------Instagram episode release post--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="epReleaseTextIgPost"
                    >
                        Instagram Post (Episode Release):
                    </label>
                    <br />

                    <textarea
                        rows="4"
                        cols="50"
                        name="epReleaseTextIgPost"
                        id="epReleaseTextIgPost"
                        onChange={handleControlledInputChange}
                        maxLength="2200"
                        required
                        className="form-control"
                        placeholder="Summary"
                        value={episode.epReleaseTextIgPost}
                    />
                </div>

                {/* ---------------Twitter episode release post--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="epReleaseTextTwitterPost"
                    >
                        Twitter Post (Episode Release):
                    </label>
                    <br />

                    <textarea
                        rows="4"
                        cols="50"
                        name="epReleaseTextTwitterPost"
                        id="epReleaseTextTwitterPost"
                        onChange={handleControlledInputChange}
                        maxLength="280"
                        required
                        className="form-control"
                        placeholder="Summary"
                        value={episode.twitterEpReleasePostText}
                    />
                </div>

                {/* ---------------YouTube episode release video description--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="epReleaseTextYouTubeDescription"
                    >
                        YouTube Video Description (Episode Release):
                    </label>
                    <br />

                    <textarea
                        rows="4"
                        cols="50"
                        name="epReleaseTextYouTubeDescription"
                        id="epReleaseTextYouTubeDescription"
                        onChange={handleControlledInputChange}
                        maxLength="5000"
                        required
                        className="form-control"
                        placeholder="Summary"
                        value={episode.twitterEpReleasePostText}
                    />
                </div>

                <h4>Reels &amp; Stories</h4>
                {/* ---------------TikTok + Instagram & Facebook Reels caption--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="epReleaseTextReelsPost"
                    >
                        TikTok + Instagram &amp; Facebook Reels Caption:
                    </label>
                    <br />

                    <textarea
                        rows="4"
                        cols="50"
                        name="epReleaseTextReelsPost"
                        id="epReleaseTextReelsPost"
                        onChange={handleControlledInputChange}
                        maxLength="300"
                        required
                        className="form-control"
                        placeholder="Summary"
                        value={episode.epReleaseTextReelsPost}
                    />
                </div>
                {/* 
                 ---------------------------------------------------------------------------
                                             EPISODE SOURCES
                 ---------------------------------------------------------------------------
                 */}
                <h4>Episode Sources Posts</h4>

                {/* ---------------Facebook Sources Post--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="seeSourcesTextFbPost"
                    >
                        Sources Post (Facebook):
                    </label>
                    <br />

                    <textarea
                        rows="4"
                        cols="50"
                        name="seeSourcesTextFbPost"
                        id="seeSourcesTextFbPost"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        placeholder="Post Text"
                        value={episode.seeSourcesTextFbPost}
                    />
                </div>

                {/* ---------------Twitter Sources Post--------------- */}
                <div className="form-group">
                    <label
                        className="episodeForm__labelText"
                        htmlFor="seeSourcesTextTwitterPost"
                    >
                        Sources Post (Twitter):
                    </label>
                    <br />

                    <textarea
                        rows="4"
                        cols="50"
                        name="seeSourcesTextTwitterPost"
                        id="seeSourcesTextTwitterPost"
                        onChange={handleControlledInputChange}
                        maxLength="300"
                        required
                        className="form-control"
                        placeholder="Post Text"
                        value={episode.seeSourcesTextTwitterPost}
                    />
                </div>
                {/* ---------------Graphics & Video Checklist--------------- */}
                <h4>Graphics &amp; Video Checklist</h4>
                <div className="episodeForm__checklistLabel">
                    Check Graphics &amp; Videos That Have Been Created
                </div>
                <input
                    className="episodeForm__checkbox"
                    type="checkbox"
                    id="epReleaseGraphicCreatedWebsite"
                    name="epReleaseGraphicCreatedWebsite"
                    value="true"
                    onChange={handleControlledInputChange}
                />
                <label
                    className="episodeForm__labelText"
                    htmlFor="epReleaseGraphicCreatedWebsite"
                >
                    {" "}
                    Episode Release Graphic: Website
                </label>
                <br />
                <input
                    className="episodeForm__checkbox"
                    type="checkbox"
                    id="epReleaseGraphicCreatedFb"
                    name="epReleaseGraphicCreatedFb"
                    value="true"
                    onChange={handleControlledInputChange}
                />
                <label
                    className="episodeForm__labelText"
                    htmlFor="epReleaseGraphicCreatedFb"
                >
                    {" "}
                    Episode Release Graphic: Facebook
                </label>
                <br />
                <input
                    className="episodeForm__checkbox"
                    type="checkbox"
                    id="epReleaseGraphicCreatedIg"
                    name="epReleaseGraphicCreatedIg"
                    value="true"
                    onChange={handleControlledInputChange}
                />
                <label
                    className="episodeForm__labelText"
                    htmlFor="epReleaseGraphicCreatedIg"
                >
                    {" "}
                    Episode Release Graphic: Instagram
                </label>
                <br />
                <input
                    className="episodeForm__checkbox"
                    type="checkbox"
                    id="epReleaseGraphicCreatedTwitter"
                    name="epReleaseGraphicCreatedTwitter"
                    value="true"
                    onChange={handleControlledInputChange}
                />
                <label
                    className="episodeForm__labelText"
                    htmlFor="epReleaseGraphicCreatedTwitter"
                >
                    {" "}
                    Episode Release Graphic: Twitter
                </label>
                <br />
                <input
                    className="episodeForm__checkbox"
                    type="checkbox"
                    id="epReleaseGraphicCreatedYouTubeThumbnail"
                    name="epReleaseGraphicCreatedYouTubeThumbnail"
                    value="true"
                    onChange={handleControlledInputChange}
                />
                <label
                    className="episodeForm__labelText"
                    htmlFor="epReleaseGraphicCreatedYouTubeThumbnail"
                >
                    {" "}
                    Episode Release Graphic: YouTube Thumbnail
                </label>
                <br />
                <input
                    className="episodeForm__checkbox"
                    type="checkbox"
                    id="epReleaseGraphicCreatedIgFbStories"
                    name="epReleaseGraphicCreatedIgFbStories"
                    value="true"
                    onChange={handleControlledInputChange}
                />
                <label
                    className="episodeForm__labelText"
                    htmlFor="epReleaseGraphicCreatedIgFbStories"
                >
                    {" "}
                    Episode Release Graphic: Facebook &amp; Instagram Stories
                </label>
                <br />
                <input
                    className="episodeForm__checkbox"
                    type="checkbox"
                    id="epReleaseVideoCreatedIgFbTikTokReels"
                    name="epReleaseVideoCreatedIgFbTikTokReels"
                    value="true"
                    onChange={handleControlledInputChange}
                />
                <label
                    className="episodeForm__labelText"
                    htmlFor="epReleaseVideoCreatedIgFbTikTokReels"
                >
                    {" "}
                    Episode Release Video: TikTok + Facebook &amp; Instagram
                    Reels
                </label>
                <br />
                <input
                    className="episodeForm__checkbox"
                    type="checkbox"
                    id="epReleaseVideoCreatedYouTube"
                    name="epReleaseVideoCreatedYouTube"
                    value="true"
                    onChange={handleControlledInputChange}
                />
                <label
                    className="episodeForm__labelText"
                    htmlFor="epReleaseVideoCreatedYouTube"
                >
                    {" "}
                    Episode Release Video: YouTube
                </label>
                <br />
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
