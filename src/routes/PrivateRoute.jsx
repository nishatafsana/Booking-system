import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router'
import { AuthContext } from '../component/Authprovider/AuthProvider'
import Loader from '../component/shared/Loader'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <Loader />
  }

  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}

export default PrivateRoute