import UserList from "../components/UserList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = ({ usersData, setUsersData }) => {
  const [showUsersList, setshowUsersList] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="py-4 my-8 px-6 lg:px-8">
      <h1 className="font-semibold text-2xl mb-4 sm:text-xl text-center">
        User Management System
      </h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-[#0073e6]  text-xl font-semibold">Available Users</p>
        <button
          className="bg-[#0073e6] text-white text-sm px-4 py-2 rounded hover:bg-[#0069d9] cursor-pointer"
          onClick={() => navigate("/user-form")}
        >
          Add User
        </button>
      </div>
      <button
        className="bg-[#0073e6] text-white text-sm px-4 py-2 rounded hover:bg-[#0069d9] cursor-pointer mb-4"
        onClick={() => setshowUsersList(!showUsersList)}
      >
        {showUsersList ? "Hide Users" : "Show Users"}
      </button>
      {showUsersList && (
        <UserList usersData={usersData} setUsersData={setUsersData} />
      )}
    </div>
  );
};
export default Home;
