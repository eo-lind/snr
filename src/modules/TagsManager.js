const remoteURL = "http://localhost:8088"

export const getTagByEpisodeId = (episodeId) => {
    return fetch(
        `${remoteURL}/tags?episodeId=${episodeId}&_expand=episode&_sort=id&_order=asc`
    ).then((res) => res.json())
}
