import { useNavigate } from "react-router-dom";
import SliderComponent from "../../utils/SpliderComponent";
import { electricData } from "./electricData";

const ElectricPage = () => {
    const navigate = useNavigate();
    const handleElectricPageClick = (id) => {
        // Find the selected furniture item from the data
        const selectedFurniture = electricData.find((item) => item.id === id);
        // Save the selected furniture data to localStorage
        localStorage.setItem("Electric", JSON.stringify(selectedFurniture));
        navigate(`/singleelectric/${id}`);
    };

    return (
        <SliderComponent
            data={electricData}
            title="Shop Electric"
            onClick={handleElectricPageClick}
        />
    );
};

export default ElectricPage;