import React, { useState } from 'react';
import TitleBar from '../TitleBar/TitleBar.jsx';
import { FaHome } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { RxValue } from "react-icons/rx";

function ServicesArea() {
    const [services, setServices] = useState([
        {
            icon: <FaHome />,
            title: 'Property Selling',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.A eaque facere iusto libero, molestiae molestias nihil porro repudiandae saepe suscipit!',
        },
        {
            icon: <GrUserManager/>,
            title: 'Property Management',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.A eaque facere iusto libero, molestiae molestias nihil porro repudiandae saepe suscipit!',
        },
        {
            icon: <FaMoneyBillWheat/>,
            title: 'Negotiation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.A eaque facere iusto libero, molestiae molestias nihil porro repudiandae saepe suscipit!',
        },
        {
            icon: <RxValue/>,
            title: 'Property Valuation',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.A eaque facere iusto libero, molestiae molestias nihil porro repudiandae saepe suscipit!',
        },
    ]);

    return (
        <>
            <section className='services-area'>
                <TitleBar title='Our Services' />
                <div className="service-center-style">
                    {services.map((item, index) => (
                        <article key={index} className='service'>
                            <span>{item.icon}</span>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
}

export default ServicesArea;
