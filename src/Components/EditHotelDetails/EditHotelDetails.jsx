
import styled from 'styled-components'
import { useParams } from 'react-router'
import { HotelData } from '../../Utils/HotelData'
import { useState } from 'react'
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
export const EditHotelDetails = () => {
    const param = useParams()
    const [, setShowData] = useState("")

    const sendData = HotelData.filter((el) => {
        return el.id === Number(param.id)
    })

    return (
        <>
              <div className={styles.EditHotelDetails}>
                <div>
                    <div style={{textAlign:"center"}}>
                        <h5>Add hotel image here ..</h5>
                    </div>
                    <HotelRoomsImages multipleImages={false} />
                </div>
                <div>
                    <div className={styles.Form}>
                        <div className={styles.name}>
                            <div>
                              <label for="hotelName">Hotel Name</label>
                              <input type="text" id="hotelName" name="hotelName" placeholder="Hotel name.."/>
                            </div>
                            <label for="lname">City</label>
                            <input type="text" id="city" name="city" placeholder="Hotel city.."/>
                            <label for="roomSize">Room size</label>
                            <select id="roomSize" name="roomSize">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="bid">Big</option>
                            </select>
                            <label for="totalRooms">Total Rooms</label>
                            <input type="number" id="totalRooms" name="totalRooms" placeholder="Total rooms.."/>
                            <label for="bedType">Bed Type</label>
                            <select id="bedType" name="bedType">
                                <option value="single">2 bed</option>
                                <option value="medium">1 bed</option>
                            </select>
                            <label for="chargePerNight">Charge Per Night in £</label>
                            <input type="number" id="chargePerNight" name="chargePerNight" placeholder="Charge per night.."/>
                        </div>
                        <h5>Break fast included?</h5>
                        <div className={styles.inputGroup}>
                            <input id="breakFastIncluded1" name="breakFastIncluded" type="radio" />
                            <label for="breakFastIncluded1">Yes</label>
                        </div>
                        <div className={styles.inputGroup}>
                            <input id="breakFastIncluded2" name="breakFastIncluded" type="radio" />
                            <label for="breakFastIncluded2">No</label>
                        </div>
                        </div>

                    </div>
                    <div>
                        <div style={{textAlign:"center"}}>
                           <h5> Add rooms sample here...</h5>
                        </div>
                        <HotelRoomsImages multipleImages={true} />
                    </div>
                    <div className={styles.submitButton}>
                        <button>Submit</button>
                    </div>
                </div>
            </>
            )
}