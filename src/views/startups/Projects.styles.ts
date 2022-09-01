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
  &:hover{
    gap: 3px;
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
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  }
  transition: all .3s ease-in-out;
`;

export const Startupname = styled.div`
  font-size: 1.2em;
  font-weight: 700;
`;
export const Startupexplanation = styled.div`
  font-size: 1.1em;
  color: #666;
`;

