import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import {Grid, Navigation,Pagination,Scrollbar} from "swiper/modules"
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router'
import CountDown from "react-countdown"
import Rating from '@mui/material/Rating';
import StarIcon from "@mui/icons-material/Star"
import axios from "axios"
const Home = () => {
    const Competelation=()=><span className={style.CountDown} style={{color:"white"}}> Ended</span>
    const renderer=({days,hours,minutes,seconds,completed})=>{
        if(completed){
            return <Competelation/>
            
        }
        else{
            return <div ><span  className={style.CountDown}> <div><p  className={style.pTime}>days</p>{days}:</div> <div><p className={style.pTime}>Hours</p>{hours}:</div> <div><p className={style.pTime}>minutes</p>{minutes}:</div> <div><p  className={style.pTime}>seconds</p>{seconds}</div> </span></div>
        }
    }
    const renderer2=({days,hours,minutes,seconds,completed})=>{
        if(completed){
            return <Competelation/>
        }
        else{
            return <div ><span  className={style.CountDown1}> <div className={style.Hours}><p  className={style.pTime1}>days</p>{days}</div> <div  className={style.Hours}><p className={style.pTime1}>Hours</p>{hours}</div> <div  className={style.Hours}><p className={style.pTime1}>minutes</p>{minutes}</div> <div  className={style.Hours}><p  className={style.pTime1}>seconds</p>{seconds}</div> </span></div>
        }
    }
    const value=5
    const count=88
    const Voucher=40
const binId="67e5b5ee8561e97a50f42c1f"
const binId2="67ea4d738960c979a57b9caf"
const binId3="67eb9fb28a456b7966806c81"

const [salesCards,setSalesCards]=useState([])
const [salesCardsa,setSalesCardsa]=useState([])
const [salesCardsan,setSalesCardsan]=useState([])

useEffect(()=>{
    const fetchUser=async()=>{
        try{
            const response=await axios.get(`https://api.jsonbin.io/v3/b/${binId}/latest`)
            setSalesCards(response.data.record.SalesCards)
        }catch(error){console.error("err0r",error);
        }

}
fetchUser()}






,[])
useEffect(()=>{
    const fetchUser=async()=>{
        try{
            const response=await axios.get(`https://api.jsonbin.io/v3/b/${binId3}/latest`)
            setSalesCardsan(response.data.record.SalesCards)
        }catch(error){console.error("err0r",error);
        }

}

fetchUser()}

,[])
useEffect(()=>{
    const fetchUser=async()=>{
        try{
            const response=await axios.get(`https://api.jsonbin.io/v3/b/${binId2}/latest`)
            setSalesCardsa(response.data.record.SalesCards)
        }catch(error){console.error("err0r",error);
        }

}
fetchUser()},[])

console.log(salesCards);
return (
    
    <>
    <div className={style.HomeStart}>
    <div className={style.homeNav}>
    <p className={style.HomeNavP}>Woman's Fashion <i id={style.iconOx} className="fa-solid fa-right-long"></i></p>
    <p className={style.HomeNavP}>Man's Fashion <i id={style.iconOx1} className="fa-solid fa-right-long"></i></p>
    <p className={style.HomeNavP}>Electronics</p>
    <p className={style.HomeNavP}>Home & lifeSttyle</p>
    <p className={style.HomeNavP}>Medicine</p>
    <p className={style.HomeNavP}>Sports & Outdoor</p>
    <p className={style.HomeNavP}>Baby's Toys</p>
    <p className={style.HomeNavP}>Groceries & Pets </p>
    <p className={style.HomeNavP}>Health & Beauty</p>

    </div>
    <hr/>
    <Swiper className={style.Swiper} spaceBetween={50} slidesPerView={1} navigation pagination={{clickable:true}} scrollbar={{draggable:true}} modules={[Navigation,Pagination,Scrollbar]}
    >
        <SwiperSlide><img className={style.SwiperImg}  src="https://i.pinimg.com/736x/a6/5e/f2/a65ef230e587e6ddf76314b7609529ec.jpg" alt=""  /><div className={style.SwipeInfoDiv}><p className={style.InfoSwipe}><i id={style.IconSwiper} className="fa-brands fa-apple"></i> Apple watch Tv 14 smart</p><h1 className={style.voucherSwipe}>12% Voucher for Model</h1><NavLink className={style.linkSwipe}>Shop Now!<i className="fa-solid fa-right-long"></i></NavLink ></div></SwiperSlide>
        <SwiperSlide><img className={style.SwiperImg} src="https://i.pinimg.com/736x/70/2e/ff/702eff1fe4eb231bfd8eefa143a90075.jpg" alt="" /><div className={style.SwipeInfoDiv}><p className={style.InfoSwipe}><i id={style.IconSwiper} className="fa-solid fa-l"></i><i id={style.IconSwiper} className="fa-solid fa-g"></i> effectTime model TV</p><h1 className={style.voucherSwipe}>16% Voucher for Model</h1><NavLink className={style.linkSwipe}>Shop Now!<i className="fa-solid fa-right-long"></i></NavLink></div></SwiperSlide>
        <SwiperSlide><img className={style.SwiperImg} src="https://i.pinimg.com/736x/5a/99/77/5a99777a0ac5b2467a944737af6dda47.jpg" alt="" /><div className={style.SwipeInfoDiv}><p className={style.InfoSwipe}><i id={style.IconSwiper} className="fa-solid fa-tv"></i>SamSung Smart model TV</p><h1 className={style.voucherSwipe}>14% Voucher for Model</h1><NavLink className={style.linkSwipe}>Shop Now! <i className="fa-solid fa-right-long"></i></NavLink></div></SwiperSlide>
        </Swiper>
    </div>
    <div className={style.Divler}>
        <div className={style.Divimsen}><i id={style.Figure4} className="fa-regular fa-font-awesome"></i><p className={style.Divim}>Today's</p></div><div className={style.divvleri}><h1 className={style.Hed}>Flash Sales</h1><CountDown className={style.CountDown} date={Date.now()+60000} renderer={renderer}/></div>
    
    <hr/>
    <div>
    <Swiper className={style.Swipers} spaceBetween={50} slidesPerView={4} navigation  modules={[Navigation]}
    >
                    {salesCards&&salesCards?.map((item)=>(
        <SwiperSlide>
                <div className={style.cards} key={item.id}>
            
            <div className={style.DivCard} ><img src={item.img} alt="" className={style.cardImage}/><p className={style.vouccher}>-{item.voucher}%</p> <p className={style.Urek}><i className="fa-regular fa-heart" ></i></p> <p className={style.Eye}><i className="fa-regular fa-eye"></i></p><p className={style.AddToCart}>Add To Cart</p></div>
            <p className={style.cardInfoHed}>{item.name}</p>
            <div className={style.CardDivi}><p className={style.cardInfoHed2}>${item.NowCost}</p><p className={style.cardInfoHed3}><s>${item.OldCost}</s></p></div>
            <div className={style.RatingDiv}><Rating id={style.Id} style={{}} name='text-feedback' value={item.rate} readOnly precision={0.1} emptyIcon={<StarIcon style={{opacity:0.55}} id={style.Id} />} className={style.Rating}/><p className={style.count}>({item.countRate})</p> </div>        </div>
            </SwiperSlide>)
    
                     )} </Swiper>
                     
        </div>
        <p className={style.AllProducts}>View All Products</p>
        <hr style={{marginTop:"20px"}}/>
        <div className={style.Divimsen} style={{marginTop:"10px"}}><i id={style.Figure4} className="fa-regular fa-font-awesome"></i><p className={style.Divim}>Categories</p></div><div className={style.divvleri}><h1 className={style.Hed}>Browse by Categories</h1>
        <div className={style.Baton}>
        <Swiper className={style.Swipers} spaceBetween={50} slidesPerView={4} navigation  modules={[Navigation]}
    >
        <SwiperSlide><i id={style.ButtonOne} className="fa-solid fa-mobile-screen-button"><p className={style.Write}>Phone</p></i></SwiperSlide>
        <SwiperSlide><i id={style.ButtonOne} className="fa-solid fa-desktop"><p className={style.Write}>COMP</p></i></SwiperSlide>
        <SwiperSlide><i id={style.ButtonOne} className="fa-regular fa-clock"><p className={style.Write}>Clock</p></i></SwiperSlide>
        <SwiperSlide><i id={style.ButtonOne} className="fa-solid fa-camera"><p className={style.Write}>PHOTO</p></i></SwiperSlide>
        <SwiperSlide><i id={style.ButtonOne} className="fa-solid fa-headphones"><p className={style.Write}>Light</p></i></SwiperSlide>
        <SwiperSlide><i id={style.ButtonOne} className="fa-brands fa-fantasy-flight-games"><p className={style.Write}>Phone</p></i></SwiperSlide>
        <SwiperSlide><i id={style.ButtonOne} className="fa-solid fa-table-tennis-paddle-ball"><p className={style.Write}>Phone</p></i></SwiperSlide>
        <SwiperSlide><i id={style.ButtonOne} className="fa-solid fa-volleyball"><p className={style.Write}>Phone</p></i></SwiperSlide>
        <SwiperSlide><i id={style.ButtonOne} className="fa-solid fa-trophy"><p className={style.Write}>Phone</p></i></SwiperSlide></Swiper></div></div>
    </div>
    <hr className={style.hr}/>
    <div style={{marginTop:"50px"}} className={style.Divimsen}><i id={style.Figure4} className="fa-regular fa-font-awesome"></i><p className={style.Divim}>Today's</p></div><div className={style.divvleri}><h1 className={style.Hed}>Best Selling Porducts</h1><p className={style.View}>View All</p></div>
<Swiper className={style.Swipers} spaceBetween={50} slidesPerView={4} navigation  modules={[Navigation]}
    >
                    {salesCardsa&&salesCardsa?.map((item)=>(
        <SwiperSlide>
                <div className={style.cards} key={item.id}>
            
            <div className={style.DivCard}><img src={item.img} alt="" className={style.cardImage}/> <p className={style.Urek}><i className="fa-regular fa-heart" ></i></p> <p className={style.Eye}><i className="fa-regular fa-eye"></i></p><p className={style.AddToCart}>Add To Cart</p></div>
            <p className={style.cardInfoHed}>{item.name}</p>
            <div className={style.CardDivi}><p className={style.cardInfoHed2}>${item.NowCost}</p><p className={style.cardInfoHed3}><s>${item.OldCost}</s></p></div>
            <div className={style.RatingDiv}><Rating id={style.Id} style={{}} name='text-feedback' value={item.rate} readOnly precision={0.1} emptyIcon={<StarIcon style={{opacity:0.55}} id={style.Id} />} className={style.Rating}/><p className={style.count}>({item.countRate})</p> </div>        </div>
            </SwiperSlide>)
    
                     )} </Swiper>
                     <hr/>
<div className={style.grid1}>
    <div className={style.grid2}><p className={style.kator}>Categories</p>
    <h1 className={style.H1Heding}>Enhance Your Music Experience</h1>
    <CountDown className={style.CountDown1} date={Date.now()+60000} renderer={renderer2}/>
    <button className={style.BuyNow}>Buy Now!</button></div>
    <div><img className={style.DimImg} src="https://i.pinimg.com/474x/a0/ec/6e/a0ec6e45600c62c6ac61b213f08ac8dd.jpg" alt="" /></div>


</div>
<hr/>
<div className={style.Tecili}>
<div className={style.Divimsen} style={{marginTop:"20px"}}><i id={style.Figure4} className="fa-regular fa-font-awesome"></i><p className={style.Divim}>Our Products</p></div><div className={style.divvleri}><h1 className={style.Hed}>Explore Our Products</h1></div>
<Swiper className={style.Swiperss} spaceBetween={50} grid={{rows:2,fill:"row"}} slidesPerView={4} navigation  modules={[Navigation,Grid]}
    >
                    {salesCardsan&&salesCardsan?.map((item)=>(
        <SwiperSlide>
                <div className={style.cards} key={item.id}>
            
            <div className={style.DivCard}><img src={item.img} alt="" className={style.cardImage}/> <p className={style.Urek}><i className="fa-regular fa-heart" ></i></p> <p className={style.Eye}><i className="fa-regular fa-eye"></i></p><p className={style.AddToCart}>Add To Cart</p></div>
            <p className={style.cardInfoHed}>{item.name}</p>
            <div className={style.CardDivi}><p className={style.cardInfoHed2}>${item.NowCost}</p><p className={style.cardInfoHed3}><s>${item.OldCost}</s></p></div>
            <div className={style.RatingDiv}><Rating id={style.Id} style={{}} name='text-feedback' value={item.rate} readOnly precision={0.1} emptyIcon={<StarIcon style={{opacity:0.55}} id={style.Id} />} className={style.Rating}/><p className={style.count}>({item.countRate})</p> </div>        </div>
            </SwiperSlide>
            
            )
    
                     )} </Swiper></div>
                             <p className={style.AllProducts} style={{marginBottom:"10px",marginTop:"20px"}}>View All Products</p>

                     <hr/>
<div className={style.bimBirlik}>
    <div className={style.Play}>
    <img className={style.SwiperImg1}  src="https://i.pinimg.com/736x/54/a8/76/54a87612ea2ede1d2501d064b4225452.jpg" alt=""  /><div className={style.SwipeInfoDiv}><p className={style.voucherSwipe1}> Play Station 5 </p><p className={style.voucherSwipe2}>This the Latest Game For Summer</p><NavLink className={style.linkSwipe}>Shop Now!<i className="fa-solid fa-right-long"></i></NavLink ></div>
    </div>
   
    <div className={style.birlik}>
    <div className={style.Play2}>
    <img className={style.SwiperImg2}  src="https://i.pinimg.com/736x/c1/a8/97/c1a8978e70f8ea36015d6d88b25089f1.jpg" alt=""  /><div className={style.SwipeInfoDiv}><p className={style.voucherSwipe3}>Man's Hat</p><p className={style.voucherSwipe4}>This the Latest Hat For Game</p><NavLink className={style.linkSwipe1}>Shop Now!<i className="fa-solid fa-right-long"></i></NavLink ></div>
    </div>
        <div className={style.Carts}>
        <div className={style.Play3}>
    <img className={style.SwiperImg3} id={style.Ids}  src="https://i.pinimg.com/736x/40/9b/bf/409bbf73980cc542868098390fbe76bc.jpg" alt=""  /><div className={style.SwipeInfoDiv}><p className={style.voucherSwipe5}>Man's Hat</p><p className={style.voucherSwipe6}>This the Latest Hat For Game</p><NavLink className={style.linkSwipe2}>Shop Now!<i className="fa-solid fa-right-long"></i></NavLink ></div>
    </div>
    <div className={style.Play3}>
    <img className={style.SwiperImg3} id={style.Idss} src="https://i.pinimg.com/736x/c8/a7/97/c8a797221536db317300dcfedc3991bd.jpg" alt=""  /><div className={style.SwipeInfoDiv}><p className={style.voucherSwipe5}>Man's Hat</p><p className={style.voucherSwipe6}>This the Latest Hat For Game</p><NavLink className={style.linkSwipe2}>Shop Now!<i className="fa-solid fa-right-long"></i></NavLink ></div>
    </div>
        </div>
    </div>
</div>
<div className={style.SonSS}>
    <div className={style.SonDivmi}>
    <div className={style.SonDivmi1}><i id={style.stil} className="fa-solid fa-truck-fast"></i></div>
    <p className={style.Heder}>Fast and Last Volunter</p>
    <p className={style.Heder2} >This is the Spred</p>

    </div>
    <div className={style.SonDivmi}>
    <div className={style.SonDivmi1}><i id={style.stil} className="fa-solid fa-shop"></i></div>
    <p className={style.Heder}>Fast and Last Volunter</p>
    <p className={style.Heder2} >This is the 7/24</p>
    </div>
    <div className={style.SonDivmi}>
    <div className={style.SonDivmi1}><i id={style.stil} className="fa-solid fa-headphones"></i></div>
    <p className={style.Heder}>This is Music for People</p>
    <p className={style.Heder2}>full time cabel</p>

    </div>
</div>

                     
                     

    
    
    </>
  )
}

export default Home