import { useState } from "react"

import './dropdownmenu.css'


export const DropdownMenu = ({ title, color, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown__menu">
            <a className="dropdown__menu-title log-out-a">
                <span onClick={() => {setOpen(!open)}}>{title}</span>
                <span className={`dropdown__menu-wrapper ${color ? "black" : ""} ${open ? "active" : 'inactive'}`}>
                    <ul>
                        {children}
                    </ul>
                </span>
            </a>
        </div>
    );
}