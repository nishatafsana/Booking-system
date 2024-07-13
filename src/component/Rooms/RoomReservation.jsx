
import { useClose } from '@headlessui/react'
import Button from '../Button/Button'
import Calender from './Calender'
import { AuthContext } from '../Authprovider/AuthProvider'
import { useContext, useState } from 'react'
import BookingModal from '../Modal/BookingModal'
import { formatDistance } from 'date-fns'
import { key } from 'localforage'
import { addBooking, updateStatus } from '../../api/booking'
import toast from 'react-hot-toast'

const RoomReservation = ({roomData}) => {
  console.log(roomData)
  const[isOpen,setIsOpen]=useState(false)
  const closeModal =()=>{
    setIsOpen(false)
  }
  const {user,role}=useContext(AuthContext)
  // price...
  const totalPrice=parseFloat(formatDistance(new Date (roomData.to), new Date(roomData.from)).split(' ') [0])*roomData.price
 
  // console.log(user)

  const [value,setValue]=useState({
    startDate:new Date(roomData?.from),
    endDate:new Date(roomData?.to),
    key:'selection',
  })
// booking status
  const [bookingInfo,setBookingInfo]=useState({
guest:{name:user.displayName,email:user.email,image:user.photoURL},
host:roomData.host.email,
location:roomData.location,
price:totalPrice,
to:value.endDate,
from:value.startDate,
title:roomData.title,
roomId:roomData._id



  })
  console.log(bookingInfo)
  const handleSelect=(ranges)=>{
    setValue({...value})
  }
  const modalHandler=()=>{
    addBooking(bookingInfo)
    .then(data=>{
      updateStatus(roomData._id,true)
      .then(data=>{
        console.log(data)
        toast.success('booking done!')
        navigate('/dashboard/my-bookings')
        closeModal()
      })
      
    })
    .catch(err=>{
      console.log(err)
      closeModal()
    })
    // console.log(modalHandler)
  }

  return (
    <div className='bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden'>
      <div className='flex flex-row items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {roomData.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <Calender  handleSelect={handleSelect} value={value} />
      <hr />
      <div className='p-4'>
        {/* hoina */}
        <Button onClick={()=>setIsOpen(true)} disabled={roomData.host.email !== user.email || roomData.booked} label='Reserve' />
      </div>
      <hr />
      <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
        <BookingModal closeModal={closeModal} modalHandler={modalHandler} bookingInfo={bookingInfo} isOpen={isOpen}></BookingModal>
      </div>
    </div>
  )
}

export default RoomReservation