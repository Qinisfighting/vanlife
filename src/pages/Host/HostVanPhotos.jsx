import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { hostvan } = useOutletContext()
    return (
        <img src={hostvan.imageUrl} className="host-van-detail-image" />
    )
}