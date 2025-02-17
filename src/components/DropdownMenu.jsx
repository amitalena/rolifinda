/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import { ArrowDropDown, ArrowDropUp, KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

// Styled Components
const Dropdown = styled("div")({ position: "relative", display: "block" });
const DropdownContent = styled(motion.div)({ position: "absolute", backgroundColor: "#fff", borderRadius: '10px', zIndex: 10, minWidth: "200px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" });
const StyledButton = styled(Button)(({ active }) => ({ textTransform: "none", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: active ? '#e8eaf6' : "none", color: active ? '#3f51b5' : "#000", padding: "8px 12px", borderRadius: "50px", "&:hover": { color: "#000" } }));

// Framer Motion Variants
const variants = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 } };
const nestedVariants = { hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 10 } };

const DropdownMenu = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [nestedIndex, setNestedIndex] = useState(null);
    const location = useLocation();
    const theme = useTheme();

    return items?.map((item, index) => (
        <Dropdown key={index} onMouseEnter={() => setOpenIndex(index)} onMouseLeave={() => setOpenIndex(null)}>
            <StyledButton href={item.route || "#"} active={location.pathname === item.route}>
                <Typography variant="body2" >{item.name}</Typography>
                {item.subMenu && (openIndex === index ? <ArrowDropUp /> : <ArrowDropDown />)}
            </StyledButton>
            <AnimatePresence>
                {openIndex === index && item.subMenu && (
                    <DropdownContent variants={variants} initial="hidden" animate="visible" exit="exit" sx={{ mt: 1 }} transition={{ duration: 0.3 }}>
                        {item.subMenu.map((subItem, subIndex) => (
                            <Dropdown key={subIndex} onMouseEnter={() => setNestedIndex(subIndex)} onMouseLeave={() => setNestedIndex(null)}>
                                <StyledButton href={subItem.route || "#"} active={location.pathname === subItem.route} sx={{ borderBottom: "1px solid #e9e9e9" }}>
                                    <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                        <Typography variant="body2" >{subItem.name}</Typography>
                                    </motion.div>
                                    {subItem.subMenu && (nestedIndex === subIndex ? <KeyboardArrowDown /> : <KeyboardArrowRight />)}
                                </StyledButton>
                                <AnimatePresence>
                                    {nestedIndex === subIndex && subItem.subMenu && (
                                        <DropdownContent variants={nestedVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3 }} sx={{ left: "100%", top: 0 }}>
                                            {subItem.subMenu.map((nestedItem, nestedIndex) => (
                                                <StyledButton key={nestedIndex} href={nestedItem.route || "#"} active={location.pathname === nestedItem.route} sx={{ borderBottom: "1px solid #e9e9e9" }}>
                                                    <motion.div whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                                                        <Typography sx={{ color: theme.palette.info.light }}>{nestedItem.name}</Typography>
                                                    </motion.div>
                                                </StyledButton>
                                            ))}
                                        </DropdownContent>
                                    )}
                                </AnimatePresence>
                            </Dropdown>
                        ))}
                    </DropdownContent>
                )}
            </AnimatePresence>
        </Dropdown>
    ));
};

export default DropdownMenu;
