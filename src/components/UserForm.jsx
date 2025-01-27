import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
const UserForm = ({ usersData, setUsersData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: {
      city: "",
    },
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: uuidV4() };
    makePostRequest(newUser);
    setFormData({
      name: "",
      email: "",
      address: { city: "" },
    });
  };
  const makePostRequest = async (userData) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setUsersData([...usersData, data]);
      if (response.ok) {
        console.log(data);
        // alert('User Added Successfully')
        // navigate('/')
      }
    } catch {
      navigate("/error");
    }
  };

  const onChangeUserName = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const onChangeUserEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const onChangeUserCity = (e) => {
    setFormData({
      ...formData,
      address: { ...formData.address, city: e.target.value },
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ffffff]">
      <div className="bg-white p-4 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">
          {id ? "Edit User" : "Add User"}
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded"
              value={formData.name}
              onChange={onChangeUserName}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded"
              value={formData.email}
              onChange={onChangeUserEmail}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="w-full px-3 py-2 border rounded"
              value={formData.address.city}
              onChange={onChangeUserCity}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              {id ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
