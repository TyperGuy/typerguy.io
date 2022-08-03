import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  border-radius: 8px;
  transition: all .3s ease-in-out;
  border: 1px solid #ddd;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
    border-color:#fff;
  }

`;

export const Image = styled.img`
   width: 100px;
  height: 100px;
`;


