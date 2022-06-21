import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { EpisodeList } from './episode/EpisodeList.js'
import { EpisodeDetail } from "./episode/EpisodeDetail.js"
import { EpisodeForm } from "./episode/EpisodeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the ~location~ list when http://localhost:3000/ */}
                <Route path="/" element={<Home />} />
                {/* Render the episode list when http://localhost:3000/episodes */}
                <Route path="/episodes" element={<EpisodeList />} />
                <Route
                    path="/episodes/:episodeId"
                    element={<EpisodeDetail />}
                />
                {/* <Route path="/episodes/create" element={<EpisodeForm />} /> */}
            </Routes>
        </>
    )
}