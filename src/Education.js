import React, { useState } from 'react'
import Text from './Text';

function Education() {

    const [educationCounter, setEducationCounter] = useState(1)

    const handleAddEducation = () => {
        setEducationCounter(educationCounter + 1)
    }
    const handleRemoveEducation = () => {
        if (educationCounter !== 0) {
            setEducationCounter(educationCounter - 1)
        }
    }
    return (
        <div>
            <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
                {/* <!-- To keep in the same column --> */}
                <div className="hideBtn break-inside-avoid">
                    <div className=" flex">
                        <Text className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal" data-text=" EDUCATION" />
                        <button className='add-btn bg-gray-400 rounded-full hidden' onClick={handleAddEducation}>
                            +
                        </button>
                        <button className='add-btn bg-gray-400 rounded-full hidden' onClick={handleRemoveEducation}>
                            -
                        </button>
                    </div>
                    {/* <!--school ---------------------------------------------------------------------------------> */}

                    {
                        new Array(educationCounter).fill(1).map((counter, idx) => {
                            return (
                                <section className="pb-4 mt-4 mb-4 break-inside-avoid" key={idx}>
                                    <header>
                                        <Text className="flex-grow text-lg font-semibold text-gray-700 leading-snugish" data-text="California State University East Bay" />
                                        <Text className="leading-normal text-md text-gray-550" data-text=" 2009 &ndash; 2014 | Bachelor of Arts" />
                                    </header>
                                    <div className="flex">
                                        <Text className="mt-1  font-semibold text-gray-700 text-md leading-snugish" data-text="Major:" />
                                        <Text className="mt-1 px-1 leading-normal text-md text-gray-650" data-text=" Computer Science" />
                                    </div>
                                </section>
                            )
                        })
                    }

                    {/* <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                        <header>
                            <Text className="flex-grow text-lg font-semibold text-gray-700 leading-snugish" data-text="California State University East Bay" />
                            <Text className="leading-normal text-md text-gray-550" data-text=" 2009 &ndash; 2014 | Bachelor of Arts" />
                        </header>
                        <div className="flex">
                            <Text className="mt-1  font-semibold text-gray-700 text-md leading-snugish" data-text="Major:" />
                            <Text className="mt-1 px-1 leading-normal text-md text-gray-650" data-text=" Computer Science" />
                        </div>
                    </section> */}
                </div>
            </section>
        </div>
    )
}

export default Education
