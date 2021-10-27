const stationInfo = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json';
const stationAvailability = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json';
const demo = document.getElementById('demo')


let arrLength = []

async function fetchData() {
    try{
        const response = await fetch(stationInfo);
        const response2 = await fetch(stationAvailability);
        // waits until the request completes...
        const newJson = await response.json()
        const newJson2 = await response2.json()
        console.log(newJson);
        console.log(newJson2);
        const properties = Object.entries(newJson)
        const properties2 = Object.entries(newJson2)
        const arr = Object.entries(properties[3][1])
        const arr2 = Object.entries(properties2[3][1])
        const stations = Object.values(arr)
        const stations2 = Object.values(arr2)
        const object = stations[0][1]
        const object2 = stations2[0][1]
        console.log(object[1].station_id)
        console.log(object2[1].station_id   )
        for(let i = 0; i<object.length; i++){
            // let hey = Object.entries(arr[i])
            arrLength.push(object[i])
            arrLength.push(object2[i])
            let x = document.createElement("div");
            x.innerHTML = `Name: ${(object[i].name)} Capacity: ${(object[i].capacity)} Available slots: ${(object2[i].num_bikes_available)}`
            demo.appendChild(x)
        }
    }
    catch(err){
        console.log(err)
    }
}
fetchData()