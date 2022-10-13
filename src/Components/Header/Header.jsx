import React from "react";
import style from './Header.module.css';
import img from './user.png';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.headerLogo}>AmiGo</div>
            <div className={style.navbarWrap}>
                <Navbar/>
                <ProfileItem/>
            </div>
        </header>
    )
}

const Navbar = () => {
    return (
        <nav className={style.headerNavbar}>
            <div className={style.navbarItem}><a href="/">Home</a></div>
            <div className={style.navbarItem}><a href="#">Requests</a></div>
            <div className={style.navbarItem}><a href="#">Notifications</a></div>
            <div className={style.navbarItem}><a href="#">Messages</a></div>
        </nav>
    )
}

const ProfileItem = () => {
    return(
        <div className={style.profileItem}>
            <div className={style.imgWrap}>
                <img src={img} alt=""/>
            </div>
            <div className={style.userName}>User Name</div>
        </div>
    )
}

export default Header;