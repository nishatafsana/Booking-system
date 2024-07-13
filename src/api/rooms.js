export const addRoom =async roomData=>{
    const response= await fetch(`${import.meta.env.VITE_API_URL}/rooms`,{
        method:'POST',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(roomData)
    })
    const data=await response.json()
    return data;
    
}
// get all rooms..
export const getAllRooms=async()=>{
    const response= await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
    const data=await response.json()
    return data;

}
// get filter rooms for host..........
export const getRooms =async email=>{
    const response= await fetch(`${import.meta.env.VITE_API_URL}/rooms/${email}`)
    const data=await response.json()
    return data;
    
}

// get single room.......
export const getAllRoom=async id=>{
    const response= await fetch(`${import.meta.env.VITE_API_URL}/room/${id}`)
    const data=await response.json()
    return data;

}
// delet a room...........
export const deleteRoom =async id=>{
    const response= await fetch(`${import.meta.env.VITE_API_URL}/rooms/${id}`,{
        method:'DELETE',
        headers:{
            'content-type':'application/json',
        },
     
    })
    const data=await response.json()
    return data;
    
}