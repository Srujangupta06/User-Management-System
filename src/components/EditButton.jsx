import { useNavigate } from "react-router-dom";

const EditButton = ({ id, getUpdatedUserData }) => {
  const navigate = useNavigate();
  const onHandleUpdateUserData = () => {
    getUpdatedUserData(id);
    navigate(`/user-form/${id}`);
  };
  return (
    <button
      className="cursor-pointer px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 mr-2"
      onClick={onHandleUpdateUserData}
    >
      Edit
    </button>
  );
};
export default EditButton;
