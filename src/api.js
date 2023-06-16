
const url =  "https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json"

export async function getVans(id) { 
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return id? data.filter(item => item.id === id)[0] : data
}

export async function getHostVans(id) {
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return id? data.filter(item => item.id === id)[0] : data
}
