import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserForm = ({ usersData, setUsersData }) => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: { city: "" },
  });

  // Get the user ID from the URL
  const { id } = useParams();
  const navigate = useNavigate();

  // If editing a user, pre-fill the form with their data
  useEffect(() => {
    if (id) {
      // Find the user with the matching name (acting as the ID)
      const userToEdit = usersData.find((user) => user.name === id);
      if (userToEdit) {
        setFormData(userToEdit);
      }
    }
  }, [id, usersData]);

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    if (id) {
      // Update existing user
      const updatedUsers = usersData.map((user) =>
        user.name === id ? { ...user, ...formData } : user
      );
      setUsersData(updatedUsers);
      alert("User updated successfully!");
    } else {
      // Add a new user
      const newUser = { ...formData, id: formData.name };
      await makePostRequest(newUser);
    }

    // Reset form and navigate back to the home page
    setFormData({ name: "", email: "", address: { city: "" } });
    navigate("/");
  };

  // Make a POST request to add a new user to the database
  const makePostRequest = async (userData) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      setUsersData([...usersData, data]); // Add the new user to the state

      if (response.ok) {
        alert("User added successfully!");
      }
    } catch {
      navigate("/error"); // Navigate to an error page if the request fails
    }
  };

  // Handle input changes in the form
  const onChangeInput = (e) => {
    const { name, value } = e.target;

    if (name === "city") {
      // Update the city in the nested address object
      setFormData({
        ...formData,
        address: { ...formData.address, city: value },
      });
    } else {
      // Update other fields directly
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#ffffff]">
      <div className="bg-white p-4 rounded shadow-lg w-80">
        {/* Display form heading based on the mode (Add or Edit) */}
        <h2 className="text-xl font-bold mb-4">
          {id ? "Edit User" : "Add User"}
        </h2>

        <form onSubmit={handleFormSubmit}>
          {/* Input field for the name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded"
              value={formData.name}
              onChange={onChangeInput}
              required
            />
          </div>

          {/* Input field for the email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded"
              value={formData.email}
              onChange={onChangeInput}
              required
            />
          </div>

          {/* Input field for the city */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              className="w-full px-3 py-2 border rounded"
              value={formData.address.city}
              onChange={onChangeInput}
              required
            />
          </div>

          {/* Buttons for Cancel and Submit */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded cursor-pointer"
              onClick={() => navigate("/")} // Navigate to home on cancel
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
              {id ? "Update" : "Add"} {/* Button text based on mode */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
