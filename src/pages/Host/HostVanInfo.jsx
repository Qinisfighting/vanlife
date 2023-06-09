import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
    const { hostvan } = useOutletContext()
    
    return (
        <section className="host-van-detail-info">
            <h4>Name: <span>{hostvan.name}</span></h4>
            <h4>Category: <span>{hostvan.type}</span></h4>
            <h4>Description: <span>{hostvan.description}</span></h4>
            <h4>Visibility: <span>Public</span></h4>
        </section>
    )
}