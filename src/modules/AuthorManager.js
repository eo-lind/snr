// TODO: this will have to be updated when site is deployed
const remoteURL = "http://localhost:8088"

export const getAuthorById = (authorId) => {
    return fetch(`${remoteURL}/authors/${authorId}`).then((res) => res.json())
}

export const getAllAuthors = () => {
    return fetch(`${remoteURL}/authors`).then((res) => res.json())
}
