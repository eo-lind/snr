const remoteURL = "http://localhost:8088"

export const getImageByEpisodeId = (episodeId) => {
    return fetch(
        `${remoteURL}/images?episodeId=${episodeId}&_expand=episode&_sort=id&_order=asc`
    ).then((res) => res.json())
}
