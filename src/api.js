
export async function getVans() {
    const res = await fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}