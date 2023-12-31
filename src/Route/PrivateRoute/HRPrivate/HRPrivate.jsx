import useAuth from '../../../Hooks/useAuth';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';
import { Navigate, useNavigate } from 'react-router-dom';
import useHRCheck from '../../../Hooks/useHR/useHR';

const HRPrivate = ({ children }) => {
      const { isHR, isLoading } = useHRCheck()
      const goto = useNavigate()
      const { loading} = useAuth()


      if(loading || isLoading){
            return <LoadingSpinner></LoadingSpinner>
      }
      if (isHR) {

            return children

      }
      return <Navigate to="/"  replace></Navigate>
};

export default HRPrivate;