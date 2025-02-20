import { useNavigate } from "react-router-dom";
import SpliderComponent from "../../utils/SpliderComponent";
import { tilesData } from "./tilesData";


const TilesPage = () => {
    const navigate = useNavigate();

    const handleTilesPageClick = (id) => {
        const selectedTiles = tilesData.find((item) => item.id === id);
        localStorage.setItem("Tiles", JSON.stringify(selectedTiles));
        navigate(`/singletiles/${id}`);
    };

    return (
        <SpliderComponent
            data={tilesData}
            title="Shop Latest Tiles"
            onClick={handleTilesPageClick}
        />
    );
};

export default TilesPage;