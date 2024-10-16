import React from 'react';
import plumbingIcon from './Assets/plumb.webp'; 
import drainIcon from './Assets/drain.jpeg';
import waterDamageIcon from './Assets/water.jpeg';
import waterHeaterIcon from './Assets/heater.jpeg';
import ServiceCard from './Servicecard';

const Services = () => {
  return (
    <div className="relative py-20 px-6 md:px-20">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full"
          style={{
            backgroundColor: '#4B0082', 
          }}
        />
        <div
          className="h-full"
          style={{
            backgroundColor: '#D3D3D3', 
            clipPath: 'polygon(0 110%, 100% 0, 100% 100%, 0 100%)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
        />
      </div>

      <div className="relative z-10">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">OUR SERVICES</h2>
        <div className="flex flex-wrap justify-center">
          <ServiceCard
            icon={plumbingIcon}
            title="Emergency Plumbing Services"
            description="Our plumbers are ready to go 24/7 for emergencies - including nights, weekends, and holidays."
          />
          <ServiceCard
            icon={drainIcon}
            title="Plumbing and Drains"
            description="As the largest plumbing and drain service company, we make thousands of repairs every day."
          />
          <ServiceCard
            icon={waterDamageIcon}
            title="Water Damage"
            description="Our teams are equipped with state-of-the-art water extraction and cleanup equipment."
          />
          <ServiceCard
            icon={waterHeaterIcon}
            title="Water Heaters"
            description="Trust us for repair and replacement of gas, electric, and tankless water heaters."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
