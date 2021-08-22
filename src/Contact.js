import React from 'react'
import Text from './Text';

function Contact() {
    return (
        <>
            <section className="pb-4 mt-4 first:mt-0">
                {/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
                <div className="break-inside-avoid">
                    <section className="pb-2 mb-2 border-b-2 break-inside-avoid">
                        <ul className="list-inside pr-7">
                            <li className="mt-1 leading-normal transition duration-100 ease-in text-gray-550 text-md hover:text-gray-700 flex">
                                <Text className="mr-3 text-lg font-semibold text-gray-700 leading-snugish" data-text="Phone:" />
                                <Text className="mt-1" data-text="+1(890)123-4567" />
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Contact
