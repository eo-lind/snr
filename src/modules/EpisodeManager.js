const remoteURL = "http://localhost:8088"

export const getEpisodeById = (episodeId) => {
  return fetch(`${remoteURL}/episodes/${episodeId}?_expand=author`).then(
      (res) => res.json()
  )
}

export const getAllEpisodes = () => {
  return fetch(
      `${remoteURL}/episodes?_sort=id&_order=desc&_expand=author`
  ).then((res) => res.json())
}

export const deleteEpisode = (id) => {
    return fetch(`${remoteURL}/episodes/${id}`, {
        method: "DELETE",
    }).then((result) => result.json())
}

export const addEpisode = (newEpisode) => {
    return fetch(`${remoteURL}/episodes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEpisode),
    }).then((response) => response.json())
}