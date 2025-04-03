import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./Header.module.css"
const Header = () => {
  return (
    <>
    <div className={style.Header1One}>
        <div className={style.Header1} ><h5 className={style.Header1Heading} >Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!    <NavLink className={style.Header1Link}  to={"/"}>ShopNow</NavLink></h5>
        <select className={style.Header1Select}><option >English</option></select></div>
    </div>
    <div className={style.header2}>
        <div><h1>Exclusive</h1></div>
        <div className={style.header2Pages}>
        <NavLink className={style.header2Linkss}>Home</NavLink>
        <NavLink  className={style.header2Links} >Contact</NavLink>
        <NavLink  className={style.header2Links} >About</NavLink>
        <NavLink  className={style.header2Links}>Sign Up</NavLink></div>
        <div className={style.header2Icon}><div className={style.inputum}><input className={style.input} type='text' placeholder='What are You looking for?'/><i className="fa-solid fa-magnifying-glass"></i></div>
        <div className={style.header2Icons}><i className="fa-regular fa-heart"></i></div>
        <div className={style.header2Icons}><i className="fa-solid fa-cart-shopping"></i></div>
        <div className={style.menu}><i className="fa-solid fa-bars"></i></div>
        </div>
    </div>

    <hr/>
    </>
  )
}

export default Header