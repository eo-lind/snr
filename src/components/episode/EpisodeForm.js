import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addEpisode } from "../../modules/EpisodeManager"
import "./EpisodeForm.css"

// ! FIXME: figure out how to require fields
// TODO store tags on the object?
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

    // separate social media fieldset:
    // fbEpReleasePostText
    // igEpReleasePostText ^char limit
    // twitterEpReleasePostText ^char limit
    // igAndFbStoryImageUrl
    // fbPostImageUrl
    // fbSourcesPostText
    // twitterSourcesPostText ^char limit
    // tikTokIgFbReelVideoUrl
    // tikTokIgFbReelVideoCaption ^char limit
    // store tags on the object?

    const [isLoading, setIsLoading] = useState(false)

    // TODO: FIXME: update the stuff below for dropdown selectors
    // you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
    // const [locations, setLocations] = useState([])
    // const [customers, setCustomers] = useState([])

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
    //     //load location data and setState
    // }, [])

    // useEffect(() => {
    //     //load customer data and setState
    // }, [])

    const handleClickSaveEpisode = (event) => {
        event.preventDefault()

        addEpisode(episode).then(() => navigate("/episodes"))

        // FIXME: once the stuff below is done, the add episode line above can be deleted
        // TODO: see above re: dropdowns
        // const locationId = episode.locationId
        // const customerId = episode.customerId

        // TODO: see above re: dropdowns
        // if (locationId === 0 || customerId === 0) {
        //     window.alert("Please select a location and a customer")
        // } else {
        //     //invoke addEpisode passing episode as an argument.
        //     //once complete, change the url and display the episode list
        //     addEpisode(episode).then(() => navigate("/episodes"))
        // }
    }
// TODO: update placeholder text on all fields
    return (
        <form className="episodeForm">
            <h2 className="episodeForm__title">New Episode Show Notes Post</h2>
            <fieldset>
                {/* ---------------title--------------- */}
                <div className="form-group">
                    <label htmlFor="title">Episode title:</label>
                    <br />
                    <input
                        type="text"
                        id="title"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Episode title"
                        value={episode.title}
                    />
                </div>

                {/* FIXME: ---------------datepicker--------------- */}
                {/* <div className="form-group">
                    <label htmlFor="date">Published:</label>
                    <br />
                    <input
                        type="date"
                        id="date"
                        onChange={handleControlledInputChange}
                        required
                        className="form-control"
                        value={episode.publishDate}
                    />
                </div> */}

                {/* TODO: change this to a textarea later? */}
                <div className="form-group">
                    <label htmlFor="briefSummary">Episode Summary:</label>
                    <br />
                    <input
                        type="text"
                        id="briefSummaryShowNotes"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Brief summary of episode"
                        value={episode.briefSummaryShowNotes}
                    />
                </div>

                {/* ---------------audio url--------------- */}
                <div className="form-group">
                    <label htmlFor="audioUrl">Episode Audio:</label>
                    <br />
                    <input
                        type="text"
                        id="audioUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Episode Audio URL"
                        value={episode.audioUrl}
                    />
                </div>

                {/* ---------------show notes graphic URL--------------- */}
                <div className="form-group">
                    <label htmlFor="blogGraphicUrl">Episode Graphic:</label>
                    <br />
                    <input
                        type="text"
                        id="blogGraphicUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Episode Graphic URL"
                        value={episode.blogGraphicUrl}
                    />
                </div>

                {/* ---------------show notes Url--------------- */}
                <div className="form-group">
                    <label htmlFor="showNotesUrl">Show Notes URL:</label>
                    <br />
                    <input
                        type="text"
                        id="showNotesUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Episode Graphic URL"
                        value={episode.showNotesUrl}
                    />
                </div>
            </fieldset>

            {/* TODO: FIXME: For dropdowns - author, Tags? */}
            <fieldset>
                {/* <div className="form-group">
                    <label htmlFor="location">Assign to location:</label>
                    <br />
                    <select
                        value={episode.locationId}
                        name="locationId"
                        id="locationId"
                        onChange={handleControlledInputChange}
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map((l) => (
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
                {/* ---------------SOCIAL MEDIA FIELDS--------------- */}
                {/* TODO: change this to a textarea later? */}
                {/* ---------------Facebook episode release post--------------- */}
                {/* TODO: add headers and fieldsets to delineate sections */}
                <div className="form-group">
                    <label htmlFor="fbEpReleasePostText">
                        Facebook Post (Episode Release):
                    </label>
                    <br />
                    <input
                        type="text"
                        id="fbEpReleasePostText"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Facebook Post (Episode Release)"
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
                        type="text"
                        id="fbEpReleaseImageUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Facebook image URL"
                        value={episode.fbEpReleaseImageUrl}
                    />
                </div>
                {/* TODO: change this to a textarea later? */}
                {/* ---------------Instagram episode release post--------------- */}
                <div className="form-group">
                    <label htmlFor="igEpReleasePostText">
                        Instagram Post (Episode Release):
                    </label>
                    <br />
                    <input
                        type="text"
                        id="igEpReleasePostText"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Instagram Post (Episode Release)"
                        value={episode.igEpReleasePostText}
                    />
                </div>
                {/* TODO: add character limit */}
                {/* ---------------Instagram episode release post image URL--------------- */}
                <div className="form-group">
                    <label htmlFor="igEpReleasePostImageUrl">
                        Instagram Post Image (Episode Release):
                    </label>
                    <br />
                    <input
                        type="text"
                        id="igEpReleasePostImageUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Instagram image URL Episode Release"
                        value={episode.igEpReleasePostImageUrl}
                    />
                </div>
                {/* TODO: add character limit */}
                {/* ---------------Twitter episode release post--------------- */}
                <div className="form-group">
                    <label htmlFor="twitterEpReleasePostText">
                        Twitter Post (Episode Release):
                    </label>
                    <br />
                    <input
                        type="text"
                        id="twitterEpReleasePostText"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Twitter Post (Episode Release)"
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
                        type="text"
                        id="igEpReleasePostImageUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Twitter image URL"
                        value={episode.igEpReleasePostImageUrl}
                    />
                </div>
                {/* ---------------Instagram & Facebook story image URL--------------- */}
                <div className="form-group">
                    <label htmlFor="igAndFbStoryImageUrl">
                        Story Image URL (Instagram &amp; Facebook):
                    </label>
                    <br />
                    <input
                        type="text"
                        id="igAndFbStoryImageUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="IG AND FB image url"
                        value={episode.igAndFbStoryImageUrl}
                    />
                </div>
                {/* TODO: add character limit */}
                {/* TODO: change this to a textarea later? */}
                {/* ---------------TikTok + Instagram & Facebook Reels caption--------------- */}
                <div className="form-group">
                    <label htmlFor="tikTokIgFbReelVideoCaption">
                        Caption (TikTok &plus; Instagram &amp; Facebook Reels):
                    </label>
                    <br />
                    <input
                        type="text"
                        id="tikTokIgFbReelVideoCaption"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="TikTok, IG, and FB caption"
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
                        type="text"
                        id="tikTokIgFbReelVideoUrl"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="TikTok, IG, and FB video url"
                        value={episode.tikTokIgFbReelVideoUrl}
                    />
                </div>
                {/* TODO: change this to a textarea later? */}
                {/* ---------------Facebook Sources Post--------------- */}
                <div className="form-group">
                    <label htmlFor="fbSourcesPostText">
                        Sources Post (Facebook):
                    </label>
                    <br />
                    <input
                        type="text"
                        id="fbSourcesPostText"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Sources Post (Facebook)"
                        value={episode.fbSourcesPostText}
                    />
                </div>
                {/* TODO: add character limit */}
                {/* TODO: change this to a textarea later? */}
                {/* ---------------Twitter Sources Post--------------- */}
                <div className="form-group">
                    <label htmlFor="twitterSourcesPostText">
                        Sources Post (Twitter):
                    </label>
                    <br />
                    <input
                        type="text"
                        id="twitterSourcesPostText"
                        onChange={handleControlledInputChange}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Sources Post (Twitter)"
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
