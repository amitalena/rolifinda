import { useState } from 'react';
import { OutlinedInput, Box, useTheme } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchComponent = () => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <Box
            sx={{
                display: { xs: 'none', md: 'flex' },
                color: theme.palette.info.main,
                backgroundColor: theme.palette.primary.deep, alignItems: 'center',
            }}
        >
            <OutlinedInput
                fullWidth
                type="search"
                size="small"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                sx={{
                    width: isHovered || isFocused ? { xs: "100%", md: "15vw" } : { xs: "100%", md: "0px" },
                    color: theme.palette.info.main,
                    backgroundColor: theme.palette.primary.deep,
                    transition: 'width 0.3s ease',
                }}
                placeholder='Search...'
            />
            <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'scale(1.0.5)' },
                }}
            >
                <Box onClick={isFocused} sx={{ px: 1, mt: 0.5 }}>
                    <Search size="small" onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} sx={{ color: theme.palette.info.main }} />
                </Box>
            </Box>
        </Box>
    );
};

export default SearchComponent;
