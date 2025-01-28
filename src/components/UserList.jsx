import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { TailSpin } from "react-loader-spinner";

const UserList = ({ usersData, setUsersData }) => {
  // If there are no users in the data, display a loading spinner
  if (usersData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin height={50} width={50} color="blue" ariaLabel="loading" />
      </div>
    );
  }

  // Function to filter out a user from the list by their ID
  const getFilteredData = (userId) => {
    // Filter usersData to exclude the user with the matching name (userId)
    const filteredUsersData = usersData.filter(
      (eachUser) => eachUser.name !== userId
    );
    // Show a confirmation dialog before deleting the user
    const result = window.confirm("Are you sure you want to delete this user?");
    if (result) {
      setUsersData(filteredUsersData); // Update usersData after confirmation
    }
  };

  return (
    <>
      {/* Create a table to display the list of users */}
      <table className="overflow-x-auto min-w-full border-collapse border border-gray-300 text-left">
        <thead>
          {/* Table header with column titles */}
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm font-medium">
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
            <th className="px-4 py-2 border border-gray-300">City</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over usersData and display each user as a table row */}
          {usersData.map((eachUser) => (
            <tr
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              key={eachUser.name} // Use the user's name as the key for unique identification
            >
              {/* Display the user's name */}
              <td className="px-4 py-2 border border-gray-300 text-nowrap">
                {eachUser.name}
              </td>
              {/* Display the user's email */}
              <td className="px-4 py-2 border border-gray-300">
                {eachUser.email}
              </td>
              {/* Display the user's city */}
              <td className="px-4 py-2 border border-gray-300">
                {eachUser.address.city}
              </td>
              {/* Render action buttons for editing and deleting the user */}
              <td className="px-4 py-2 border border-gray-300 flex items-center">
                <EditButton id={eachUser.name} />{" "}
                {/* Edit button for the user */}
                <DeleteButton
                  id={eachUser.name} // Pass the user's name to DeleteButton
                  getFilteredData={getFilteredData} // Pass the delete function as a prop
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UserList;
