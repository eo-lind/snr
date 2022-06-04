// TODO: this will have to be updated when site is deployed
const remoteURL = "http://localhost:8088"

export const getEpisodeById = (episodeId) => {
  return fetch(`${remoteURL}/episodes/${episodeId}`)
  .then(res => res.json())
}

export const getAllEpisodes = () => {
  return fetch(`${remoteURL}/episodes`)
  .then(res => res.json())
}

export const deleteEpisode = (id) => {
    return fetch(`${remoteURL}/episodes/${id}`, {
        method: "DELETE",
    }).then((result) => result.json())
}