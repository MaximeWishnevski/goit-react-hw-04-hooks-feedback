import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 25px;
`;
export const Buttons = styled.div`
  margin-bottom: 20px;
  
`;

export const Button = styled.button`
margin:10px;
border: none;
border-radius: 5px;
background-color: blue;
color: white;
font-size: 20px;
width: 150px;
height: 40px;
cursor: pointer;
box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
transform: scale(1);
transition: transform 500ms;
&:hover {
    cursor: pointer;
    transform: scale(0.93);
    background-color: #0000c4;
`;

export const StatItem = styled.p`
  font-size: 16px;
  font-weight: 600;
`;