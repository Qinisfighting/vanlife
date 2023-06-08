import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { hostvan } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
            <p>Name: <span>{hostvan.name}</span></p>
            <p>Category: <span>{hostvan.type}</span></p>
            <p>Description: <span>{hostvan.description}</span></p>
            <p>Visibility: <span>Public</span></p>
        </section>
    )
}