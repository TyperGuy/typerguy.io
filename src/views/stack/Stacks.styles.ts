import styled from "styled-components";

// Styled component named StyledButton
export const Container = styled.div`
  width: 100%;
  display: flex;
  padding:20px 0;
  gap: 20px;
  justify-content: center;
  @media only screen and (min-width:776px){
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

export const ExperiecesContainer = styled.div`
  width: 88%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  background-color: transparent;
`;
