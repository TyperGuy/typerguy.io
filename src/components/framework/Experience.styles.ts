import styled from "styled-components";

export const Container = styled.div<{index:number,colorsArray :string[]}>`
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  border-radius: 8px;
  transition: all .3s ease-in-out;
  position: relative;
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  &:hover{
     outline:2px solid ${props=>props.colorsArray[props.index]};
  }

`;

export const Image = styled.img`
   width: 70px;
  height:70px;
`;



