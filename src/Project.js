import React, { useState } from 'react'
import Text from './Text';

function Project() {
    const [projectCounter, setProjectCounter] = useState(1)
    const handleProjectCounter = () => {
        setProjectCounter(projectCounter + 1)
    }
    const handleProjectRemoveCounter = () => {
        if (projectCounter !== 0) {
            setProjectCounter(projectCounter - 1)
        }
    }
    return (
        <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
            <div className="hideBtn project break-inside-avoid">
                {/* <!-- To keep in the same column --> */}
                <div className=" flex">
                    <Text className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal" data-text=" PROJECTS" />
                    <button className='add-btn bg-gray-400 rounded-full hidden' onClick={handleProjectCounter}>
                        +
                    </button>
                    <button className='add-btn bg-gray-400 rounded-full hidden' onClick={handleProjectRemoveCounter}>
                        -
                    </button>
                </div>

                {/* <!--Projects ---------------------------------------------------------------------------------------------------------> */}
                <ul className="">
                    {
                        new Array(projectCounter).fill(1).map((counter, idx) => {
                            return (
                                <li className="pb-4 mb-4 border-b-2 last:border-b-0 break-inside-avoid" key={idx}>
                                    <header>
                                        <Text className="text-lg font-semibold text-gray-700 leading-snugish" data-text="Portfolio Website" />

                                        <Text className="leading-normal text-md text-gray-550" data-text="Since 2019 | JSX, React, Next.js, SCSS" />
                                    </header>
                                    <Text className="mt-2.1 text-md text-gray-700 leading-normal" data-text="A unique and streamlined developer portfolio site that
                    combines the useful aspect of development portfolios with a
                    blog using Next.js. Interface is clean and features graphics
                    designed personally for use within the site." />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Project
