
import styled from 'styled-components'
import { TopSection } from './TopSection/TopSection'
import { TitleInfo } from './TittleInfo/TittleInfo'
import { AllIcons } from './AllIcons/AllIcons'
import { Availability } from './Avaliablity/Availability'
import { Navbar } from '../../Navbar/Navbar'
import FooterBlue from '../../Footer/FooterBlue'
import { SearchRequest } from '../../SearchPage/SearchRequest'
import { useParams } from 'react-router'
import { HotelData } from '../../../Utils/HotelData'
import { useState } from 'react'

const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 20px;
`
const Div = styled.div`
margin:0 ;

`
export const HotelDetails = () => {
    const param = useParams()
    const [, setShowData] = useState("")

    const sendData = HotelData.filter((el) => {
        return el.id === Number(param.id)
    })
    const filterSearch = (search) => {

        const filteredData = HotelData.filter((e) => {
            return (e.name.toLowerCase().includes(search.toLowerCase()))
        })
        setShowData(filteredData)
    }
    return (
        <>
            <Navbar />
            <Wrapper>
                <Div>
                    <TopSection />
                    <TitleInfo type="hotel" name={`${sendData[0].name}`}
                        address={`${sendData[0].city}`}
                        images={sendData[0].images}
                    />

                    <AllIcons />

                    <Availability />



                </Div>
            </Wrapper>
            <FooterBlue />

        </>
    )
}