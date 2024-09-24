import React from 'react';
import styled from 'styled-components';
import badmintonImage from "../assets/img/hobbies/badminton.webp"
import chessImage from "../assets/img/hobbies/chess.jpeg"
import billiardsImage from "../assets/img/hobbies/billiards.avif"
import gamingImage from "../assets/img/hobbies/gaming.avif"

const HobbiesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px;
`;

const HobbyCard = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const HobbyImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  @media (max-width: 1300px) {
    width:50%;
    height:100px;
  }
`;


const HobbyTitle = styled.h3`
  text-align: center;
  margin: 10px 0;

  @media (max-width: 1300px) {
    font-size:12px;
  }
`;

const Hobbies = () => {
  return (
    <HobbiesContainer>
      <HobbyCard>
        <HobbyImage src={badmintonImage} alt="Badminton" />
        <HobbyTitle>Badminton</HobbyTitle>
      </HobbyCard>

      <HobbyCard>
        <HobbyImage src={chessImage} alt="Chess" />
        <HobbyTitle>Chess</HobbyTitle>
      </HobbyCard>

      <HobbyCard>
        <HobbyImage src={billiardsImage} alt="Billiards" />
        <HobbyTitle>Billiards</HobbyTitle>
      </HobbyCard>

      <HobbyCard>
        <HobbyImage src={gamingImage} alt="Gaming" />
        <HobbyTitle>Gaming</HobbyTitle>
      </HobbyCard>
    </HobbiesContainer>
  );
};

export default Hobbies;
