
import styled from 'styled-components'
import { TopSection } from '../HotelDetails/Components/TopSection/TopSection'
import { TitleInfo } from '../HotelDetails/Components/TittleInfo/TittleInfo'
import { AllIcons } from '../HotelDetails/Components/AllIcons/AllIcons'
import { Availability } from '../HotelDetails/Components/Avaliablity/Availability'
import { Navbar } from '../Navbar/Navbar'
import FooterBlue from '../Footer/FooterBlue'
import { useParams } from 'react-router'
import { HotelData } from '../../Utils/HotelData'
import { useState } from 'react'

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
    
    return (
        <>
            <Navbar />
            <Wrapper>
                <Div>
                    <TopSection />
                    <TitleInfo type="hotel" name={`${sendData[0].name}`}
                        address={`${sendData[0].city}`}
                        url_1={`${sendData[0].visitUrls.url_1}`}
                        url_2={`${sendData[0].visitUrls.url_2}`}
                        url_3={`${sendData[0].visitUrls.url_3}`}
                        url_5={`${sendData[0].visitUrls.url_5}`}
                        url_6={`${sendData[0].visitUrls.url_6}`}
                        url_7={`${sendData[0].visitUrls.url_7}`}
                        url_8={`${sendData[0].visitUrls.url_8}`}
                        url_9={`${sendData[0].visitUrls.url_9}`}
                        url_10={`${sendData[0].visitUrls.url_10}`}
                    />

                    <AllIcons />

                    <Availability />



                </Div>
            </Wrapper>
            <FooterBlue />

        </>
    )
}