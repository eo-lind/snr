const remoteURL = "http://localhost:8088"

export const getVideoByEpisodeId = (episodeId) => {
    return fetch(
        `${remoteURL}/videos?episodeId=${episodeId}&_expand=episode&_sort=id&_order=asc`
    ).then((res) => res.json())
}
