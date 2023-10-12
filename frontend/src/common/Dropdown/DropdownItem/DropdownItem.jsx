import './dropdownitem.css'


export const DropdownItem = (props) => {
    return (
        <li className="dropdown__menu-item">
            <a href={props.link}>{props.text}</a>
        </li>
    );
}