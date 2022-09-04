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

export const Description = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  align-items: center;
  height:50px;
  z-index: 100;
  top: 110px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`;

export const Arrow = styled.div`
  width: 20px;
  height: 20px;
  margin-top: -5px;
  background-color: #fff;
  transform: rotate(45deg);
`;



