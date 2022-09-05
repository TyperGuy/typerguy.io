import styled,{keyframes} from "styled-components";


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

const Fade = keyframes`
 0% {opacity:0 }
 100% { opacity:1}
`

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
  background-color: #e6ecf8;
  color:#4361ee;
  box-shadow: rgba(67, 97, 238, .2) 0px 14px 28px, rgba(67, 97, 238, .2) 0px 10px 10px;
  animation: ${Fade} .5s;
  -webkit-animation: ${Fade} .5s;
  -moz-animation: ${Fade} .5s;
  -o-animation: ${Fade} .5s;
  -ms-animation: ${Fade} .5s;
`;

export const Arrow = styled.div`
  width: 20px;
  height: 20px;
  margin-top: -5px;
  background-color: #e6ecf8;
  transform: rotate(45deg);
`;



