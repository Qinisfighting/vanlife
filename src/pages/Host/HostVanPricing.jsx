import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const { hostvan } = useOutletContext()
    return (
        <p className="host-van-price">${hostvan.price}<span>/day</span></p>
    )
}