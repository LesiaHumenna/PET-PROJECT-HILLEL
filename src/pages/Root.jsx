import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Root (){
useEffect
    return(
        <>
        <ToastContainer autoClose={2000} />
        <Header />
        <Outlet /> 
        </>
    )
}
export default Root;