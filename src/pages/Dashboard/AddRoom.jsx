import { useContext, useState } from "react";
import AddRoomForm from "../../component/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../component/Authprovider/AuthProvider";

const AddRoom = () => {
  // server site a data pathanu..
  const {user}=useContext(AuthContext)
  // state change..
  const[loading,setLoading]=useState(false)
  const[uploadButtonText,setUploadButtonText]=useState('hero')
  const[dates,setDates]=useState( {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })
  

  const handleSubmit=event=>{
    event.preventDefault()
    setLoading(true)
 const location=event.target.location.value;
 const title=event.target.title.value;
 const price=event.target.price.value;
 const total_guest=event.target.total_guest.value;
 const bedrooms=event.target.bedrooms.value;
 const bathrooms=event.target.bathrooms.value;
 const description=event.target.description.value;
 const category=event.target.category.value;
 const from=dates.startDate;
 const to=dates.endDate;
 const image=event.target.image.files[0]

//  upload image.....
imageUpload(image)
.then(data=>{
const roomData={
  image:data.data.display_url,
  location,
  title,
  from,
  to,
  price:parseFloat(price),
  total_guest,
  bedrooms,
  bathrooms,
  description,
 host:{
  name:user?.displayName,
  image:user?.photoURL,
  email:user?.email,
  },
  category,
}
console.log(roomData)
  setLoading(false)
})
.catch(err=>{
  console.log(err.message)
  setLoading(false)
})
  }



  // image change............
  const handleImageChange =image=>{
    setUploadButtonText(image.name)
  }

  // date....
  const handleDates =ranges=>{
    setDates(ranges.selection)
  }

    return (
        <div>
          <AddRoomForm handleSubmit={handleSubmit}
          loading={loading}
          handleImageChange={handleImageChange}
          uploadButtonText={uploadButtonText}
          dates={dates}
          handleDates={handleDates}
          
          ></AddRoomForm>
        </div>
    );
};

export default AddRoom;