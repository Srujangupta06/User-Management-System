import { useNavigate } from "react-router-dom";

// Define the EditButton component, receiving the 'id' as a prop
const EditButton = ({ id }) => {
  const navigate = useNavigate(); // Initialize navigate to redirect the user to another route

  // Function to handle navigation to the user edit form
  const onHandleUpdateUserData = () => {
    // Redirect to the user form page with the user's id in the URL
    navigate(`/user-form/${id}`);
  };

  return (
    // Render a button with styling and an onClick handler
    <button
      className="cursor-pointer px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 mr-2"
      onClick={onHandleUpdateUserData} // Call the function when the button is clicked
    >
      Edit {/* Display "Edit" as the button text */}
    </button>
  );
};
export default EditButton;
