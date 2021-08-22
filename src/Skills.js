import React, { useState } from 'react'
import Text from './Text';

const Skills = () => {
    const [skillCounter, setSkillCounter] = useState(1)

    const handleAddClick = e => {
        setSkillCounter(skillCounter + 1)
    }
    const handleRemoveClick = e => {
        if (skillCounter !== 0) {
            setSkillCounter(skillCounter - 1)
        }
    }

    return (
        <div>
            <section className="pb-4 mt-4 first:mt-0">
                {/* <!-- To keep in the same column --> */}
                <div className="hideBtn  break-inside-avoid">
                    <div className="flex group">
                        <h2 className=" mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal">
                            SKILLS
                        </h2>
                        <button className='add-btn bg-gray-400 rounded-full hidden' onClick={handleAddClick}>
                            +
                        </button>
                        <button className='add-btn bg-gray-400 rounded-full hidden' onClick={handleRemoveClick}>
                            -
                        </button>
                    </div>
                    {/* <!--Full Stack Development -------------------------------------------------------------------------------------------> */}
                    <section className="mb-2 break-inside-avoid">

                        <div className="my-1 last:pb-1">
                            <ul className="flex flex-wrap text-sm2 leading-relaxed -mr-1.6 -mb-1">
                                {new Array(skillCounter).fill(1).map((skill, idx) => (
                                    <li
                                        className=" px-2.5 mr-1.6 mb-1 text-gray-200 leading-relaxed print:bg-white print:border-inset bg-black rounded mx-1" key={idx}>
                                        <Text className="skill-input" data-text="HTML5" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    )
}

export default Skills
