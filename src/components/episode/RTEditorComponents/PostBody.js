import { useState, useEffect } from "react"
import { Editor, OriginalTools } from "react-bootstrap-editor"

export const PostBody = () => {
    const [editorState, setEditorState] = useState("")
    const [allEpisodes, setAllEpisodes] = useState([])

    const fetchPOSTString = (param1) => {
        const newPost = {
            postBody: param1,
        }
        fetch("http://localhost:8088/episodes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        }).then(() => getSamples())
    }

    const getSamples = () => {
        fetch("http://localhost:8088/episodes")
            .then((data) => data.json())
            .then((samples) => setAllEpisodes(samples))
    }

    useEffect(() => {
        fetch("http://localhost:8088/episodes")
            .then((res) => res.json())
            .then((data) => setAllEpisodes(data))
    }, [])

    return (
        <>
            <Editor onChange={setEditorState} />

            <button
                style={{ marginTop: "1em" }}
                onClick={(e) => {
                    e.preventDefault()
                    fetchPOSTString(editorState)
                }}
            >
                Your Mom
            </button>
            {allEpisodes.map((sample) => {
                return (
                    <div
                        key={sample.id}
                        dangerouslySetInnerHTML={{
                            __html: sample.postBody,
                        }}
                    ></div>
                )
            })}
        </>
    )
}
export default PostBody
