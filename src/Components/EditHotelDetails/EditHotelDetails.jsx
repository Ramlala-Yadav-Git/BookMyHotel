
import styled from 'styled-components'
import { useParams } from 'react-router'
import { HotelData } from '../../Utils/HotelData'
import { useState } from 'react'
import styles from "./EditHotelDetails.module.css"
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
            <div>
                <div>
                        <div className={styles.mediaContainer} >
                            <figure  className={styles.mediaObject}  >
                                <img className={styles.imgObject}  src="https://www.amazingneo.com/public/images/logo.png" />
                            </figure>
                        </div>
                        <div class="media-control" className={styles.mediaControl} >
                            <span className={styles.mediaOverlay} class="media-overlay">
                                <input type="file" id="media-input" accept="image/*"/>
                                    <i class="an an-write media-icon"></i>
                            </span>
                            <button className="btn save-profile">
                                <i class="an an-save"></i>Save Profile</button>
                        </div>
                </div>
                <div>
                    <input type="text" placeholder='hotel name' />
                </div>
                <div>
                    <input type="radio" name="bedSize" value="small" />
                    <input type="radio" name="bedSize" value="medium" />
                    <input type="radio" name="bedSize" value="big" />

                </div>

            </div>

        </>
    )
}