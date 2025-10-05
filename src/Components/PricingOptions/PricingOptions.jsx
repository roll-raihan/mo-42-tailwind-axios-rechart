import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);

    // console.log(pricingData)

    return (
        <div>
            <h2 className='text-4xl text-center'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 m-4'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;