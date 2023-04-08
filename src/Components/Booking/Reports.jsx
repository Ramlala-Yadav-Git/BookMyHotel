import { useEffect, useState } from "react";
import styles from "./Booking.module.css";
import { ProgressBar } from 'react-loader-spinner';
import { Navbar } from "../Navbar/Navbar";
import FooterBlue from "../Footer/FooterBlue";
import { BookingDetails } from "../SearchData/BookingDetails";
import { getAllTransactions, getReportsForTheDay } from "../../Utils/HotelData";


export const Reports = () => {
    const [loader, setLoader] = useState(false);
    const [reports, setReports] = useState([]);
    const[date, setDate] = useState(new Date().toJSON().substring(0,10));
    const [totalAmount, setTotalAmount] = useState(0);
    
    async function getReports(date){
        setLoader(true);
        let res = await getReportsForTheDay({date});
        setReports(res);
        let total = 0;
        res.forEach((el)=>{
          total += Number(el.roomDetails.price);
        })
        setTotalAmount(total);
        setLoader(false);
        console.log(res);
    }

    function hadleChange(e){
        setDate(e.target.value);
    }
    useEffect(()=>{
      getReports(new Date().toJSON().substring(0,10));
    },[])


    return <>
        <div>
       <Navbar />
        </div>
        {loader && <div className={styles.loader}>
            <ProgressBar
                height="80"
                width="80"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass="progress-bar-wrapper"
                borderColor='#003580'
                barColor='#006FBF'
            />
        </div>}
        <div className={styles.search}>
            <input type="date" id="date" value={date} onChange={hadleChange}/>
            <div className={styles.button}>
               <button onClick={()=>getReports(date)}>Search</button>
            </div>
            <div>
                <div className={styles.total}>
                  Total transaction for the day is - <b> £ {totalAmount}</b>
                </div>
            </div>
        </div>
        {
            (!reports || reports.length <= 0)  && <div style={{textAlign:"center", margin:"10px"}}>No Data for {date}</div>
        }
        <div style={{maxWidth:"80%", margin:"auto", marginTop:"10px"}}>
        {
            reports.map((el)=>{
                let checkinDate = el.startDate.substring(0,16);
                let checkOutDate = el.endDate.substring(0,16);
                return  <BookingDetails 
                checkinDate={checkinDate} checkoutDate={checkOutDate}
                hotelName={el.hotelDetails.name} hotelImage={el.hotelDetails.url}
                hotelCity={el.hotelDetails.city}
                price={el.roomDetails.price}/> 
            })
        }
        </div>
        <FooterBlue />

    </>
}