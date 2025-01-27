import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import UserForm from "./components/UserForm";
import Error from "./Routes/Error";
import NotFound from "./Routes/NotFound";
import { useEffect, useState } from "react";
import { USERS_DATA_API } from "./utilities/constants";
import { useNavigate } from "react-router-dom";
function App() {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    try {
      const response = await fetch(USERS_DATA_API);
      const data = await response.json();
      setUsersData(data);
    } catch {
      navigate("/error");
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Home  usersData={usersData} setUsersData={setUsersData} />} />
      <Route
        path="/user-form"
        element={<UserForm usersData={usersData} setUsersData={setUsersData} />}
      />
      <Route path="/user-form/:id" element={<UserForm  usersData={usersData} setUsersData={setUsersData} />} />
      <Route path="/error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
