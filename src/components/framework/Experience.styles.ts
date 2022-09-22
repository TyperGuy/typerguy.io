import styled,{keyframes} from "styled-components";


export const Container = styled.div`
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0 10px;
  border-radius: 8px;
  transition: all .3s ease-in-out;
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    margin-top: -4px;
  }

`;

export const Image = styled.img`
  width: 20px;
  height:20px;
`;

const Fade = keyframes`
 0% {opacity:0 }
 100% { opacity:1}
`



export const Arrow = styled.p`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;



