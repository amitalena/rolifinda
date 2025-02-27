import { useNavigate } from "react-router-dom";
import { furnitureData } from "./furnitureData";
import FurnitureComponent from "../../utils/FurnitureComponent";

const FurniturePage = () => {
    const navigate = useNavigate();

    const handleFurniturePageClick = (id) => {
        // Find the selected furniture item from the data
        const selectedFurniture = furnitureData.find((item) => item.id === id);

        // Save the selected furniture data to localStorage
        localStorage.setItem("Furniture", JSON.stringify(selectedFurniture));

        // Navigate to the single blog page
        navigate(`/singlefurniture/${id}`);
    };

    return (
        <FurnitureComponent
            data={furnitureData}
            title="Our Furniture Product"
            onClick={handleFurniturePageClick}
        />
    );
};

export default FurniturePage;