const remoteURL = "http://localhost:8088"

export const getAudioByEpisodeId = (episodeId) => {
    return fetch(
        `${remoteURL}/audio?episodeId=${episodeId}&_expand=episode&_sort=id&_order=asc`
    ).then((res) => res.json())
}