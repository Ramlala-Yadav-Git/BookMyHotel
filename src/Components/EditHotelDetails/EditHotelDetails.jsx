
import styled from 'styled-components'
import { useParams } from 'react-router'
import { HotelData } from '../../Utils/HotelData'
import { useState, useEffect } from 'react'
import styles from "./EditHotelDetails.module.css"
import { HotelRoomsImages } from './HotelRoomsImages'
const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 20px;
`
const Div = styled.div`
margin:0 ;

`
export const EditHotelDetails = ({ hotelData }) => {
    const param = useParams();
    const [, setShowData] = useState("");
    const [hotelImage, setHotelImage] = useState([]);
    const [hotelVisitURL, setHotelVisitURL] = useState([]);
    const [hotel, setHotel] = useState({});


    const handleHotelDetailsSubmission =(event)=>{
        event.preventDefault();
        const form = event.target.form;
       console.log(hotel);
    }
    const handleEdit = (event)=>{
      let name = event.target.name;
      let value = event.target.value;
    
      let newHotel = {
          ...hotel
      }
      newHotel[name] = value;
      setHotel(newHotel);
    }
    useEffect(() => {
        setHotel(hotelData);
        let hotelImage = {
            "data_url": hotelData.url
        }
        let visitURLS = [];
        hotelData.visitUrls.forEach((el) => {
            visitURLS.push({ "data_url": el })
        })
        setHotelImage([hotelImage]);
        setHotelVisitURL(visitURLS);
    }, [])
    return (
        <>
            <form className={styles.EditHotelDetails} id="hotelDetailsForm">
                <div>
                    <div style={{ textAlign: "center" }}>
                        <h5>Add hotel image here ..</h5>
                    </div>
                    <HotelRoomsImages multipleImages={false} imageLists={hotelImage} />
                </div>
                <div>
                    <div className={styles.Form}>
                        <div className={styles.name}>
                            <div>
                                <label htmlFor="name">Hotel Name</label>
                                <input type="text" id="name" name="name" placeholder="Hotel name.." value={hotel.name} onChange={handleEdit}/>
                            </div>
                            <label htmlFor="lname">City</label>
                            <input type="text" id="city" name="city" placeholder="Hotel city.." value={hotel.city} onChange={handleEdit}/>
                            <label htmlFor="roomSize">Room size</label>
                            <select id="roomSize" name="roomSize" value={hotel.roomSize} onChange={handleEdit}>
                                <option value="Small size room">Small</option>
                                <option value="Medium size room">Medium</option>
                                <option value="Big size room">Big</option>
                            </select>
                            <label htmlFor="availableRooms">Total Rooms</label>
                            <input type="number" id="availableRooms" name="availableRooms" placeholder="Total rooms.." value={hotel.availableRooms} onChange={handleEdit}/>
                            <label htmlFor="bedSize">Bed Type</label>
                            <select id="bedSize" name="bedSize" value={hotel.bedSize} onChange={handleEdit}>
                                <option value="3 bed">3 bed</option>
                                <option value="2 bed">2 bed</option>
                                <option value="1 bed">1 bed</option>
                            </select>
                            <label htmlFor="price">Charge Per Night in £</label>
                            <input type="number" id="price" name="price" placeholder="Charge per night.." value={hotel.price} onChange={handleEdit}/>
                            <label htmlFor="discountedPrice">Discounted Charge Per Night in £</label>
                            <input type="number" id="discountedPrice" name="discountedPrice" placeholder="Discounted charge per night.." value={hotel.discountedPrice} onChange={handleEdit}/>
                        </div>
                        <h5>Break fast included?</h5>
                        <div className={styles.inputGroup}>
                            <input id="breakFastIncluded1" name="breakFast" type="radio" value={hotel.breakFast} onChange={handleEdit}/>
                            <label htmlFor="breakFastIncluded1">Yes</label>
                        </div>
                        <div className={styles.inputGroup}>
                            <input id="breakFastIncluded2" name="breakFast" type="radio" value={hotel.breakFast} onChange={handleEdit}/>
                            <label htmlFor="breakFastIncluded2">No</label>
                        </div>
                    </div>

                </div>
                <div>
                    <div style={{ textAlign: "center" }}>
                        <h5> Add rooms sample here...</h5>
                    </div>
                    <HotelRoomsImages multipleImages={true} imageLists={hotelVisitURL} />
                </div>
                <div className={styles.submitButton}>
                    <button onClick={(event) => handleHotelDetailsSubmission(event)} type="button">Submit</button>
                </div>
            </form>
        </>
    )
}