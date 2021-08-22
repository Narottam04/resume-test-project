import React from 'react'
import Text from './Text';
import Editor from './Editor'


function Summary() {
    return (
        <>
            <section className="pb-2 pb-4 mt-4 border-b-4 first:mt-0">
                {/* <!-- To keep in the same column --> */}
                <div className="break-inside-avoid">
                    <Text className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal" data-text="SUMMARY" />

                    <section className="mb-2 break-inside-avoid">
                        <Text className="summary mt-2 leading-normal text-gray-700 text-md"
                            data-text=" Full stack autodiadact with demonstrable capacity to assess
                    and manage complex business needs and surmount obstacles in
                    the way thereof thus producing refined and accessible work
                    products." />
                        {/* <Editor className="summary mt-2 leading-normal text-gray-700 text-md" /> */}
                    </section>
                </div>
            </section>
        </>
    )
}

export default Summary
