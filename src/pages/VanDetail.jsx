
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export default function VanDetail() {
    const params = useParams() 
    const [van, setVan] = useState([])
    const vanIndex = params.id-1
    // console.log(params) e.g when van with id 2 is clicked, output: {id: "2"}

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")   // mock server (server.js) dosen't work...
        .then(res => res.json())
        .then(data => setVan(data[vanIndex]))
    }, [vanIndex])
    console.log(van)

    return <h1>Van detail page goes here</h1>
}