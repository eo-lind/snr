import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addEpisode } from "../../modules/EpisodeManager"
import "./EpisodeForm.css"

export const EpisodeForm = () => {

    const [episode, setEpisode] = useState({
        title: "",
        publishDate: 0,
        authorId: 1,
        audioUrl: "please add",
        showNotesUrl: "please add",
        briefSummaryShowNotes: "",
        blogGraphicUrl: "please add",
        fbEpReleasePostText: "please add",
        igEpReleasePostText: "please add",
        twitterEpReleasePostText: "please add",
        igAndFbStoryImageUrl: "please add",
        fbPostImageUrl: "please add",
        fbSourcesPostText: "please add",
        twitterSourcesPostText: "please add",
        tikTokIgFbReelVideoUrl: "please add",
        tikTokIgFbReelVideoCaption: "please add",
    })

    // TODO: form fields to add:
    // date picker REQUIRED
    // author dropdown REQUIRED
    // audioUrl *remove* requirement
    // shownotesUrl *remove* requirement
    // blogGraphicUrl *remove* requirement
    // separate social media fieldset:
    // fbEpReleasePostText *remove* requirement
    // igEpReleasePostText *remove* requirement ^char limit
    // twitterEpReleasePostText *remove* requirement ^char limit
    // igAndFbStoryImageUrl *remove* requirement
    // fbPostImageUrl *remove* requirement
    // fbSourcesPostText *remove* requirement
    // twitterSourcesPostText *remove* requirement ^char limit
    // tikTokIgFbReelVideoUrl *remove* requirement
    // tikTokIgFbReelVideoCaption *remove* requirement ^char limit

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

    return (
        <form className="episodeForm">
            <h2 className="episodeForm__title">New Episode Show Notes Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Episode title:</label>
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
                {/* TODO: change this to a textarea later? */}
                <div className="form-group">
                    <label htmlFor="briefSummary">Episode Summary:</label>
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
            </fieldset>

            {/* TODO: FIXME: For dropdowns - author, Tags? */}
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
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
                    <label htmlFor="customerId">Customer: </label>
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
                </div>
            </fieldset> */}
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
