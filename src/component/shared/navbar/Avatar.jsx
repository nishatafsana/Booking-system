import { useContext } from 'react';
import avater from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../Authprovider/AuthProvider';

const Avatar = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <img className='rounded-full' src={user && user.photoURL?user.photoURL:avater} alt="profile" height='30' width='30'/>
        </div>
    );
};

export default Avatar;