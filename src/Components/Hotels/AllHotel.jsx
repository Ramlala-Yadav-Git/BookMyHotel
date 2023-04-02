import { useState } from "react";
import { HotelData } from "../../Utils/HotelData";
import FooterBlue from "../Footer/FooterBlue";
import { Navbar } from "../Navbar/Navbar";
import { DataComponent } from "../SearchData/DataComponent";
import styles from "../SearchPage/SearchRequest.module.css"
import { Link } from "react-router-dom";


export const AllHotels = () => {

    const [showData, setShowData] = useState(HotelData)
    const [price, setPrice] = useState(false)
    const [star, setStar] = useState(false)
    // const [policy, setPolicy] = useState(false)
    return <>
        <div>
            <Navbar />
        </div>
        <div className={styles.button} style={{display:"flex", justifyContent:"space-around", marginTop:"10px"}}>
            <Link to="/edit/new" className={styles.Link}>Add new Hotel</Link>
        </div>
        <div className={styles.serachPageContainer} style={{ display:"flex", justifyContent:"center"}}>
            <div className={styles.hotelListContainer} >
                {
                    showData.map((e, i) => {
                        // console.log(e.url);
                        return <DataComponent url={e.url}
                            key={e.id}
                            name={e.name} city={e.city} distance={e.distance}
                            bedSize={e.bedSize} 
                            cancelationPolicy={e.cancelationPolicy}
                            cancellation={e.cancellation}
                            reviews={e.reviews}
                            rating={e.rating}
                            breakFast={e.breakFast}
                            availability={e.availability}
                            availableRooms={e.availableRooms}
                            price={e.price}
                            discount={(Number(e.price) - Number( e.discount) * Number(e.price)/100)}
                            id={e.id}
                            view={e.view}
                        />


                    })
                }
            </div>
        </div>

        <FooterBlue />

    </>
}