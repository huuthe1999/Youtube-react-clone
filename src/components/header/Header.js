import "./header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import logo from "assets/images/logo.png";
import avatar from "assets/images/avatar.png";
const Header = () => {
    return (
        <div className="border border-dark header">
            <FaBars className="header__menu" size={26} />
            <img src={logo} alt="" className="header__logo" />
            <form action="">
                <input type="text" placeholder="Search" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>
            <div className="header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src={avatar} alt="Avatar" />
            </div>
        </div>
    );
};

export default Header;
