import { useLoaderData } from "react-router-dom";
import Header from "../../component/Rooms/Header";
import RoomInfo from "../../component/Rooms/RoomInfo";
import RoomReservation from "../../component/Rooms/RoomReservation";
import Container from "../../component/shared/Container/Container";



const RoomsDetails = () => {
  const roomData=useLoaderData()


    return (
        <Container>
      <div className='max-w-screen-lg mx-auto '>
        <div className='flex flex-col gap-6'>
          <Header roomData={roomData}/>
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <RoomInfo roomData={roomData} />
            <div className='mb-10 md:col-span-3 order-first md:order-last'>
              <RoomReservation roomData={roomData} />
            </div>
          </div>
        </div>
      </div>
    </Container>
    );
};

export default RoomsDetails;