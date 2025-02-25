import React, { useEffect, useState } from "react";
import { electricData } from "./electricData";
import ViewComponent from "../../utils/ViewComponent";


const SingleElectric = () => {
    const [mainBlog, setMainBlog] = useState(null);
    const [latestBlogs, setLatestBlogs] = useState([]);

    useEffect(() => {
        // Retrieve the saved furniture data from localStorage
        const savedFurniture = localStorage.getItem("Electric");

        if (savedFurniture) {
            // Parse the data back to an object
            const parsedFurniture = JSON.parse(savedFurniture);

            // Set the main blog (selected furniture)
            setMainBlog(parsedFurniture);

            // Set the latest blogs (all other furniture items except the selected one)
            const filteredLatestBlogs = electricData.filter(
                (item) => item.id !== parsedFurniture.id
            );
            setLatestBlogs(filteredLatestBlogs);
        } else {
            // If no data is found in localStorage, fallback to default data
            const defaultMainBlog = electricData.find((blog) => blog.id === 1);
            const defaultLatestBlogs = electricData.filter((blog) => blog.id !== 1);

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

export default React.memo(SingleElectric);