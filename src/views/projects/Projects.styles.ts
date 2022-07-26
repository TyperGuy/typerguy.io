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

export const ProjectContainer = styled.div`
  width: 88%;
  display: flex;
  flex-wrap: wrap;
  background-color: red;
  gap: 1.5rem;
  background-color: transparent;
`;
export const ProjectCard = styled.div`
  width: 300px;
  height: 322px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  background-color:red;
  border-radius: 8px;
`;
