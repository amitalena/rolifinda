import { useNavigate } from "react-router-dom";
import { tilesData } from "./tilesData";
import TilesComponent from "../../utils/TilesComponent";

const TilesPage = () => {
    const navigate = useNavigate();

    const handleTilesPageClick = (id) => {
        const selectedTiles = tilesData.find((item) => item.id === id);
        localStorage.setItem("Tiles", JSON.stringify(selectedTiles));
        navigate(`/singletiles/${id}`);
    };

    return (
        <TilesComponent
            data={tilesData}
            title="Our Tiles Product"
            onClick={handleTilesPageClick}
        />
    );
};

export default TilesPage;