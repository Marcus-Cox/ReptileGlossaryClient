//This component manages getting data from the server to be rendered onto  pages. 
const remoteURL = "http://localhost:8000"

export const getReptileGuides = () => {
    return fetch("http://localhost:8000/reptileguides", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getReptileGuideById = (reptileguideId) => {
    return fetch(`${remoteURL}/reptileguides/${reptileguideId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
        } 
    })
        .then(response => response.json())
}

export const getReptiles = () => {
    return fetch("http://localhost:8000/reptiles", { 
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createReptileGuide = (reptileguide) => {
    return fetch(`${remoteURL}/reptileguides`, { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reptileguide)
    }).then(response => response.json())
}

export const updateReptileGuide = (reptileguide, id) => {
    console.log('updatedReptileguide', reptileguide)
    return fetch(`http://localhost:8000/reptileguides/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reptileguide)
    })
}

export const deleteReptileGuide = (id) => {
    return fetch(`${remoteURL}/reptileguides/${id}`, { 
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        },
        body: JSON.stringify(id)
    })
}
