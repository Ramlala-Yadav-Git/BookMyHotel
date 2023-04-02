
import styled from 'styled-components'
import { TopSection } from '../HotelDetails/Components/TopSection/TopSection'
import { TitleInfo } from '../HotelDetails/Components/TittleInfo/TittleInfo'
import { AllIcons } from '../HotelDetails/Components/AllIcons/AllIcons'
import { Availability } from '../HotelDetails/Components/Avaliablity/Availability'
import { Navbar } from '../Navbar/Navbar'
import FooterBlue from '../Footer/FooterBlue'
import { useParams } from 'react-router'
import { HotelData } from '../../Utils/HotelData'
import { useState, useEffect } from 'react'
import { EditHotelDetails } from './EditHotelDetails'
const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 20px;
`
const Div = styled.div`
margin:0 ;

`
export const EditHotel = () => {
    const dummyHotel = {
        name: null,
        city: null,
        roomSize: null,
        availableRooms: null,
        price: null,
        bedSize: null,
        discountedPrice: null,
        breakFast: null,
        availability: true,
        cancelationPolicy: null,
        cancellation: null,
        distance: null,
        id: 'new',
        rating: null,
        reviews: null,
        url: null,
        view: null,
        images: []
    }
    const param = useParams()
    const [, setShowData] = useState("")

    const sendData = HotelData.filter((el) => {
        return el.id === Number(param.id)
    })

    return (
        <>
            <Navbar />
            <Wrapper>
                <Div>
                    <EditHotelDetails hotelData={param.id == 'new' ? dummyHotel : sendData[0]} />
                </Div>
            </Wrapper>
            <FooterBlue />

        </>
    )
}