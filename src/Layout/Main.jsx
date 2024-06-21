import { Outlet } from "react-router-dom";
import NavBar from "../component/shared/navbar/NavBar";
import Footer from "../component/shared/Footer/Footer";



const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='pt-28 pb-20'>
        <Outlet />
      
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Main;