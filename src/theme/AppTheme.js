import { createTheme } from '@mui/material/styles';
import "@fontsource/poppins";

const AppTheme = createTheme({
    breakpoints: {
        values: {
            // xl: 1536,
            // lg: 1200,
            // md: 900,
            // sm: 600,
            // xs: 0,
            xs: 0,
            sm: 480,
            md: 768,
            lg: 1024,
            xl: 1368,
            xxl: 1980
        }
    },
    size: 10,
    spacing: 8,
    palette: {
        mode: 'light',
        background: {
            default: "hsl(0, 0%, 100%)",
        },
        primary: {
            light: '#fff3e0',
            main: '#E96300',
            dark: '#ff6d00',
            deep: '#e65100',
            contrastText: '#fff',
        },
        info: {
            light: '#ffffff',
            main: '#e9e9e9',
            dark: '#616161',
            deep: '#000',
            contrastText: '#fff',
        },
    },
    shape: {
        borderRadius: 0
    },
    typography: {
        fontFamily: 'Poppins',
        fontSize: 25,
        htmlFontSize: 30,
        h1: {
            fontWeight: 300,
            fontSize: "6rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontWeight: 300,
            fontSize: "3.75rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontWeight: 400,
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h4: {
            fontWeight: 400,
            fontSize: "1.650rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em"
        },
        h5: {
            fontWeight: 400,
            fontSize: "1.2rem",
            lineHeight: 1.334,
            letterSpacing: "0em"
        },
        h6: {
            fontWeight: 400,
            fontSize: "1.0rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em",
            textAlign: 'justify'
        },
        body1: {
            fontFamily: "Poppins",
            fontWeight: '700',
            fontSize: "0.978rem",
            lineHeight: 1.5,
            letterSpacing: "0.01038em",
            textAlign: 'justify'
        },
        body2: {
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "0.796rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em",
            textAlign: 'justify'

        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
            textAlign: 'justify'
        },
        subtitle2: {
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em",
            textAlign: 'justify'
        },
        button: {
            fontWeight: 400,
            fontSize: "0.775rem",
            lineHeight: 1.45,
            letterSpacing: "0.02857em",
            textTransform: "uppercase",
        },
        caption: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em",
            textAlign: 'justify'

        },
        overline: {
            fontWeight: 400,
            fontSize: "0.75rem",
            lineHeight: 1.66,
            letterSpacing: "0.08333em",
            textTransform: "uppercase",
            textAlign: 'justify'
        }
    },
    mixins: {
        toolbar: {
            minHeight: 25
        }
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '0px 12px',
                    height: 32,
                    lineHeight: '10px',
                    borderBottom: '1px solid #FEFEFE',
                },
            },
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    '&:nth-of-type(even)': {
                        fontSize: '10px',
                        backgroundColor: '#F0F1F5'
                    },
                    '&:last-child td, &:last-child th': {
                        fontSize: '10px',
                        border: 0,
                    },
                    borderBottom: '1px solid #FEFEFE',
                },
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    height: 30,
                },
            },
        },
        MuiTableFooter: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F0F1F5',
                    height: 20,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold',
                    fontSize: '12px',
                    minHeight: '10px',
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    minHeight: '10px',
                },
            },
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    background: '#fff',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                        background: 'none',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 0,
                    },
                },
                input: {
                    padding: '8px 12px',
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    padding: '3px',
                    '& svg': {
                        fontSize: '15px',
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    my: 1,
                    height: 27,
                    background: 'none',
                    '& svg': {
                        fontSize: '13px',
                    },
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f0f0f0',
                    margin: '10px 0',
                    '&:hover': {
                        backgroundColor: '#d0d0d0',
                    },
                },
            },
        },
    },

});



export default AppTheme