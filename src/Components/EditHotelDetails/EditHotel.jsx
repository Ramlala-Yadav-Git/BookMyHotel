
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
    const param = useParams()
    const [, setShowData] = useState("")

    const sendData = HotelData.filter((el) => {
        return el.id === Number(param.id)
    })
    useEffect(() => {
        console.log(param)
        console.log(sendData)
    }, [])
    return (
        <>
            <Navbar />
            <Wrapper>
                <Div>
                    <EditHotelDetails hotel={sendData[0]} />
                </Div>
            </Wrapper>
            <FooterBlue />

        </>
    )
}