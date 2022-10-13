//Fist Visiable information on page appers to house content seen on screen when rendered
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getReptileGuides, deleteReptileGuide } from "./ReptileGuideManager.js"
import "./ReptileGuide.css"
import { ReptileGuideCard } from "./ReptileGuideCard.js"

export const ReptileGuideList = (props) => {
    const [ reptileguides, setReptileGuides ] = useState([])
    const history = useHistory();
    
    const {reptileguideId} = useParams();

    useEffect(() => {
        getReptileGuides().then(data => setReptileGuides(data))
    }, [])

    const delReptileGuide = (reptileguideId) => {
        deleteReptileGuide(reptileguideId)
            .then(() => getReptileGuides().then(setReptileGuides));
    }

    return (
        <article className="reptileguides">
            <h2>List of Reptile Guides</h2>
            <button className="btn" id="createBtn"
                onClick={() => {
                    history.push({ pathname: "/reptileguides/new" })
                }}
            >Register New Reptile Guide
            </button>
            {/* The .map() method allows you to iterate over an array and modify its elements using a callback function.
            The callback function will then be executed on each of the array's elements. */}
            {reptileguides.map(reptileguide => 
                <ReptileGuideCard
                key={reptileguide.id}
                reptileguide={reptileguide}
                delReptileGuide={delReptileGuide} />
            )}
        </article>
    )
}