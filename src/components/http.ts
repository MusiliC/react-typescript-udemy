export async function get(url: string){
const res = await fetch(url)

if(!res.ok){
    throw new Error("Error when fetching data")
}

const data = await res.json() as unknown

return data;
}