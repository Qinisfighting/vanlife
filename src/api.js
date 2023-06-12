
export async function getVans() {
    const res = await fetch("https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json")
    const data = await res.json()
    return data
}