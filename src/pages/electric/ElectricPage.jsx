import { useNavigate } from "react-router-dom";
import { electricData } from "./electricData";
import ElectricComponent from '../../utils/ElectricComponent'
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
        <ElectricComponent
            data={electricData}
            title="Our Electric Product"
            onClick={handleElectricPageClick}
        />
    );
};

export default ElectricPage;