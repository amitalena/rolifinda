import { useEffect, useState } from "react";
import { tilesData } from "./tilesData";
import ViewComponent from "../../utils/ViewComponent";

const SingleTiles = () => {
    const [mainBlog, setMainBlog] = useState(null);
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        // Retrieve the saved furniture data from localStorage
        const savedFurniture = localStorage.getItem("Tiles");

        if (savedFurniture) {
            // Parse the data back to an object
            const parsedFurniture = JSON.parse(savedFurniture);

            // Set the main blog (selected furniture)
            setMainBlog(parsedFurniture);

            // Set the latest blogs (all other furniture items except the selected one)
            const filteredLatestBlogs = tilesData.filter(
                (item) => item.id !== parsedFurniture.id
            );
            setLatestBlogs(filteredLatestBlogs);
        } else {
            // If no data is found in localStorage, fallback to default data
            const defaultMainBlog = tilesData.find((blog) => blog.id === 1);
            const defaultLatestBlogs = tilesData.filter((blog) => blog.id !== 1);

            setMainBlog(defaultMainBlog);
            setLatestBlogs(defaultLatestBlogs);
        }
    }, []);

    if (!mainBlog) {
        return <div>Loading...</div>; // Show a loading state while data is being fetched
    }

    return (
        <ViewComponent
            blog={mainBlog}
            latestBlogs={latestBlogs}
        />
    );
};

export default SingleTiles;