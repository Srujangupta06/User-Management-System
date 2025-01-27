import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { TailSpin } from "react-loader-spinner";

const UserList = ({ usersData, setUsersData }) => {

  if (usersData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <TailSpin height={50} width={50} color="blue" ariaLabel="loading" />
      </div>
    );
  }

  const getFilteredData = (userId) => {
    const filteredUsersData = usersData.filter(
      (eachUser) => eachUser.id !== userId
    );
    setUsersData(filteredUsersData);
  };

  const getUpdatedUserData = (userId) => {
    console.log("userId", userId);
  };

  return (
    <>
      <table className=" overflow-x-auto min-w-full border-collapse border border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm font-medium">
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Email</th>
            <th className="px-4 py-2 border border-gray-300">City</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((eachUser) => (
            <tr
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              key={eachUser.id}
            >
              <td className="px-4 py-2 border border-gray-300 text-nowrap">
                {eachUser.name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {eachUser.email}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {eachUser.address.city}
              </td>
              <td className="px-4 py-2 border border-gray-300 flex items-center">
                <EditButton
                  id={eachUser.id}
                  getUpdatedUserData={getUpdatedUserData}
                />
                <DeleteButton
                  id={eachUser.id}
                  getFilteredData={getFilteredData}
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
