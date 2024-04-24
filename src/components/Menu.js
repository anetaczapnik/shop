import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li><NavLink to={"/"} style={{ textDecoration: 'none' }}> <div>Home</div></NavLink></li>
            <li><NavLink to={"/shoes"} style={{ textDecoration: 'none' }}> <div>Buty</div></NavLink></li>
            <li><NavLink to={"/clothes"} style={{ textDecoration: 'none' }}> <div>Ubrania</div></NavLink></li>
        </ul>
    )
}

export default Menu;

