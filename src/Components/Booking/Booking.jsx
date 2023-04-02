import { useEffect, useState } from "react";
import styles from "./Booking.module.css";
import { ProgressBar } from 'react-loader-spinner';
import { Navbar } from "../Navbar/Navbar";
import FooterBlue from "../Footer/FooterBlue";
import { BookedHotelDetails } from "./BookedHotel";

export const Booking = () => {
    const [loader, setLoader] = useState(false);

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
        {/* <BookedHotelDetails/> */}
        <FooterBlue />

    </>
}