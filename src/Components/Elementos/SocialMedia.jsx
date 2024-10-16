import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
  display: flex; 
  justify-content: center; 
  gap: 20px; 
  padding: 20px; 
`;

const Icon = styled.a`
  color: white; 
  font-size: 24px; 
  transition: color 0.3s; 
  
  &:hover {
    color: #0073e6; 
  }
`;

const SocialMedia = () => {
  return (
    <SocialMediaWrapper>
      <Icon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </Icon>
      <Icon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </Icon>
      <Icon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </Icon>
      <Icon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </Icon>
    </SocialMediaWrapper>
  );
};

export default SocialMedia;