export const menuData = [
    { name: "Home", route: "/" },
    { name: "AboutUs", route: "/aboutus" },
    {
        name: "furniture",
        subMenu: [
            { name: "Furniture1", route: "/furniture1" },
            { name: "Furniture2", route: "/furniture2" },
            { name: "Furniture2", route: "/furniture2" },
        ]
    },
    {
        name: "Tiles",
        subMenu: [
            { name: "Tile 1", route: "/tile1" },
            { name: "Tile 2", route: "/tile2" },
            { name: "Tile 3", route: "/tile3" },
        ]
    },
    {
        name: "Electrics",
        subMenu: [
            { name: "ELectric 1", route: "/electric1" },
            { name: "ELectric 2", route: "/electric2" },
            { name: "ELectric 3", route: "/electric3" },
        ]
    },
    { name: "Blogs", route: "/blogs" },
    { name: "ContactUs", route: "/contactus" }
]