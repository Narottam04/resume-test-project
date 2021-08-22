import React from 'react'

import Header from './Header';
import Experience from './Experience';
import Contact from './Contact';
import Summary from './Summary';
import Education from './Education';
import Project from './Project';
import Skills from './Skills';
import Editor from './Editor'


const Resume = ({ componentRef }) => {
    return (
        <>
            {/* <!-- Page --------------------------------------------------------------------------------------------------------> */}
            <div ref={componentRef}>
                <div
                    className="max-w-3xl p-3 mx-auto my-auto bg-white  md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6  print:bg-white pl-3 relative">
                    {/* <Editor /> */}

                    {/* <!-- Header----------------------------------------------------------------------------------------------------> */}
                    <Header />

                    {/* <!-- Column --------------------------------------------------------------------------------------------------> */}
                    <div
                        className="col-gap-16 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance flex gap-x-0.5 ">
                        <div>
                            {/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
                            <Contact />
                            {/* <!--Summary ----------------------------------------------------------------------------------------------------------> */}
                            <Summary />
                            {/* <!--Experience ------------------------------------------------------------------------------------------------------> */}
                            <Experience />
                            {/* <!--Education --------------------------------------------------------------------------------------------------------> */}
                            <Education />

                            {/* <!--Projects ----------------------------------------------------------------------------------------------------------> */}

                        </div>
                        <div className="mx-2">
                            <Project />
                            {/* <!--Begin Skills -----------------------------------------------------------------------------------------------------> */}
                            <Skills />
                        </div>
                    </div>
                    {/* <!-- end Column --> */}
                </div>
            </div>
        </>
    )
}

export default Resume
