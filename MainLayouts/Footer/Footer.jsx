import React from 'react'
import style from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={style.FooterinDivi} style={{marginTop:"150px",backgroundColor:"black"}}>
        <div></div><div className={style.wer}><div className={style.FooterinDivleri}><h2 className={style.FooterinHidrlari}>Exclusive</h2><p className={style.Headerin3}>Subscribe</p><p className={style.Headerin3}>Get off your %10 voucher</p><input className={style.input} placeholder='search' type='text'/><i id={style.stt} className="fa-solid fa-plane"></i></div>
        <div className={style.FooterinDivleri}><h2 className={style.FooterinHidrlari}>Support</h2><p className={style.Headerin3}>111 Halborten ten year 23 street</p><p className={style.Headerin3}>exculive@gmail.com</p><p className={style.Headerin3}>+994-511-590-14-24</p></div>
        </div><div className={style.wer}><div className={style.FooterinDivleri}><h2 className={style.FooterinHidrlari}>Account</h2><p className={style.Headerin3}>My Account</p><p className={style.Headerin3}>Login/Register</p><p className={style.Headerin3}>Cart</p><p className={style.Headerin3}>Wishlist</p><p className={style.Headerin3}>Shop</p></div>
        <div className={style.FooterinDivleri}><h2 className={style.FooterinHidrlari}>Quick Link</h2><p className={style.Headerin3}>Privacy Policy</p><p className={style.Headerin3}>Terms Of Use</p><p className={style.Headerin3}>FAQ</p><p className={style.Headerin3}>Contact</p></div>
        </div><div className={style.FooterinDivleri}><h2 className={style.FooterinHidrlari}>DownLoad App</h2><p className={style.Headerin3}>Save $3 with new spp user</p><div className={style.clsasl}><i id={style.qr} className="fa-solid fa-qrcode"></i><div className={style.clsas2}><i id={style.play} className="fa-solid fa-play"><div><p className={style.clsas4}>Get It Online</p><p className={style.clsas3}>Get It Online</p></div></i><i id={style.apple} className="fa-brands fa-apple"><div><p className={style.clsas4}>Get It Online</p><p className={style.clsas3}>Get It Online</p></div></i></div></div><div className={style.clsas6}> <i class="fa-brands fa-facebook-f" id={style.player}></i><i class="fa-brands fa-instagram" id={style.player}></i><i class="fa-brands fa-twitter" id={style.player}></i><i class="fa-brands fa-linkedin-in" id={style.player} className={style.ssss}></i></div> </div>
   </div>
    
  )
}

export default Footer