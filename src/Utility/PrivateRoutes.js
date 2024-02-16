import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");
  console.log(storedToken);
  let auth = { token: false };
  if (!auth.token) {
    toast.warn("Please login first");
    navigate("/");
  }
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
