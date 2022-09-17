import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getReptileGuideById } from "./ReptileGuideManager";
import "./ReptileGuideCard.css"

export const ReptileGuideDetails = () => {
    const {reptileguideId} = useParams();

    const [ reptileGuideDetail, setReptileGuideDetail ] = useState({
        reptile: "",
        title: "",
        description: "",
        content: ""
    })

    const loadReptileGuide = () => {
        return getReptileGuideById(reptileguideId)
            .then(data => {
                setReptileGuideDetail(data)
            })
    }

    useEffect(() => {
        loadReptileGuide()
        console.log(reptileguideId)
    }, [])

    return (
        <>
        <section>
        <h2>{reptileguideId.title}</h2>
        <p>description: {reptileguideId.description}</p>
        <p>content: {reptileguideId.content}</p>
        </section>
        </> 
    )
}