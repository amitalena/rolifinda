import { useNavigate } from "react-router-dom";
import SliderComponent from "../../utils/SpliderComponent";
import { furnitureData } from "./furnitureData";

const Furniture = () => {
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
        <SliderComponent
            data={furnitureData}
            title="Shop Furniture"
            onClick={handleFurniturePageClick}
        />
    );
};

export default Furniture;