import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}

const MenuOverlay = ({ links }) => {
    return (
        <motion.ul initial="closed"
            animate="open"
            exit="closed"
            variants={variants} className="flex flex-col py-4 items-center md:hidden">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </motion.ul>
    );
};

export default MenuOverlay;
