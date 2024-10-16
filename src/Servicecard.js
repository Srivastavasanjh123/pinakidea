import React from 'react';
import styled, { keyframes } from 'styled-components';


const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const CardContainer = styled.div`
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  padding-top: 4rem;
  padding-bottom: 2.5rem;
  width: 100%;
  max-width: 18rem;
  margin: 1rem;
  text-align: center;
  position: relative;
  transition: transform 0.6s ease;

  &:hover {
    animation: ${rotateAnimation} 0.6s ease forwards;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 50%;
  padding: 0.5rem;
`;

const IconImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

const ServiceCard = ({ icon, title, description }) => (
  <CardContainer>
    <IconContainer>
      <IconImage src={icon} alt="Service Icon" />
    </IconContainer>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <button className="text-blue-600 font-semibold hover:text-blue-700">
      EXPLORE THIS SERVICE &gt;
    </button>
  </CardContainer>
);

export default ServiceCard;
