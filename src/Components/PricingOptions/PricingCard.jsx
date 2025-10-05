import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({ pricing }) => {
    const { title, price, info, features } = pricing;
    return (
        <div className='border bg-amber-700 rounded-2xl p-4 flex flex-col'>
            {/* card header */}
            <div className='text-center'>
                <h2 className='text-3xl'>{title}</h2>
                <h3 className='font-bold text-xl'>{price}</h3>
            </div>
            {/* card body */}
            <div className='bg-amber-500 rounded-2xl p-4 mt-5 text-black flex-1'>
                <p className='text-xl'>{info}</p>
                {
                    features.map((features, index) => <PricingFeatures key={index} features={features}></PricingFeatures>)
                }
            </div>
            <button className="btn w-full mt-4
            rounded-2xl hover:bg-white hover:text-black">Wide</button>
        </div>
    );
};

export default PricingCard;