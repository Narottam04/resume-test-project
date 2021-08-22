import React,{useState} from 'react'
import Text from './Text';



const Header = () => {
    // const [headerData, setHeaderData] = useState("")

    // const handleChange = (e) => {
    //     // console.log(e.target.innerHTML)
    //     setHeaderData([e.target.innerHTML])
    //     console.log(headerData)
    // }

    // value = {headerData} onKeyUp = {handleChange}
    return (
        <>
            <header className="inline-flex items-baseline justify-between w-full mb-3 align-top border-b-8">
                <div className="block">
                    <Text className="mb-1 text-5xl font-bold text-gray-750" data-text="Narottam Sahu" name = "Header" />
                    {/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
                    <Text className="m-0 ml-1 text-2xl font-semibold text-gray-700 leading-snugish" data-text="Full Stack Web Development" name = "subHeader" />
                    {/* <!--Location ---------------------------------------------------------------------------------------------------------> */}
                    <Text className="m-0 mt-2 mb-2 ml-1 font-semibold text-md text-gray-550 leading-snugish" data-text="Mumbai, India"  name = "location" />
                </div>
            </header>
        </>
    )
}

export default Header
