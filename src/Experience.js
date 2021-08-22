import React, { useState } from 'react'
import Text from './Text';

function Experience() {
    const [experienceCounter, setExperienceCounter] = useState(1)
    const handleAddExperience = () => {
        setExperienceCounter(experienceCounter + 1)
    }
    const handleRemoveExperience = () => {
        if (experienceCounter != 0) {
            setExperienceCounter(experienceCounter - 1)
        }
    }
    const removeIcons = () => {
        const btn = document.getElementsByClassName('printBtn')
        btn.style.display = "none";
    }
    return (
        <div>
            <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">

                {/* <!-- To keep in the same column -------------------------------------------------------------------------> */}
                <div className="hideBtn break-inside-avoid">
                    <div className="flex">
                        <Text className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal" data-text="EXPERIENCE" />
                        <button className=' add-btn bg-gray-400 rounded-full hidden' onClick={() => { handleAddExperience() }
                        }>
                            +
                        </button>
                        <button className=' add-btn bg-gray-400 rounded-full hidden' onClick={handleRemoveExperience}>
                            -
                        </button>
                    </div>
                    {/* <!--Job 1--> */}
                    {
                        new Array(experienceCounter).fill(1).map((counter, idx) => {
                            return (
                                <section className="mb-2 break-inside-avoid" key={idx}>
                                    <header>
                                        <Text className="text-lg font-semibold text-gray-650 leading-snugish" data-text=" Full Stack Web Developer" />
                                        <Text className="leading-normal text-md text-gray-550 " data-text="Jun 2018 &ndash; Present | Freelance" />

                                    </header>
                                    <ul className="mt-2.1 text-md text-gray-700 leading-normal">
                                        <li className="flex">
                                            {/* <span className="transform -translate-y-px select-none text-gray-550 inline">&rsaquo; </span> */}
                                            <Text data-text="proactively cultivated client relationships" />
                                        </li>
                                    </ul>
                                </section>
                            )
                        })
                    }
                    {/* <!--                Additional Jobs Would Go Here--> */}
                </div>
            </section>
        </div>
    )
}

export default Experience
