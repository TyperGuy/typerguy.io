import styled from "styled-components";

// Styled component named StyledButton
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding:20px 0;
  gap: 20px;
  @media only screen and (min-width:776px) {
    justify-content: flex-start;
  }
`;

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`;
export const Subtitle = styled.div`
  font-size: 1.3em;
  color: #666;
`;


export const Flex = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  transition: all 1s ease-in-outSS;
  color: blue;
  padding: 10px;
  border-radius: 4px;
  background-color: #e6ecf8;
  &:hover{
    gap: 3px;
  }
`;

export const Link = styled.a`
  font-size: 1em;
  color:#4361ee;
`;


export const StartupCard = styled.div`
  width: 320px;
  height: 236px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  justify-content:center;
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
  transition: all .3s ease-in-out;
`;

export const StartupLogo = styled.img`
  height: 50px ;
`;
export const Startupexplanation = styled.p`
  font-size: 1em;
  color: #666;
  text-align: center;
  letter-spacing: 0;
  margin: 0 10px;
`;

