import styled from "styled-components";

// Styled component named StyledButton
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding:20px 0;
  gap: 20px;
`;

export const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
`;
export const Subtitle = styled.div`
  font-size: 1.1em;
  color: #666;
`;

export const Flex = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  transition: all 1s ease-in-outSS;
  color: #666;
  &:hover{
    gap: 3px;
    color: blue;
  }
`;

export const Link = styled.a`
  font-size: 1.2em;
`;


export const StartupCard = styled.div`
  width: 300px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: all .5s ease-in-out;
  &:hover{
    border-left: 2px solid red;
    padding-left: 5px;
  }
`;
