import Logo from "../../assets/img/Header/Logo.svg";
import "./Header.css";
import basket from "../../assets/img/icons/header/basket.svg"
import favourite from "..//../assets/img/icons/header/favourite.svg"
import user from "..//../assets/img/icons/header/user.svg"
export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <img src={Logo} alt="" />
      </div>

      <div className="header__menu">
        <ul className="header_ul">
          <li className="header_li"> <img className="header_menu_img" src={basket} alt="" /> <a href="#">1205 руб.</a></li>
          <li className="header_li"> <img className="header_menu_img" src={favourite} alt="" />  <a href="#"> Закладка </a></li>
          <li className="header_li"> <img className="header_menu_img" src= {user} alt="" /> <a href="#">Профиль</a></li>
        </ul>
      </div>
    </div>
  );
}
