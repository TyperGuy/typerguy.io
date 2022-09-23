import styled,{keyframes} from "styled-components";

// Styled component named StyledButton

const slowFade = keyframes`
  from{
    opacity:.9;
    transform:translateY(30px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }
`
export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: #fafafa;
  position: relative;
  height: 1000px;
`;
export const ChildContainer = styled.div`
  width: 90%;
  min-height: 900px ;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  cursor: pointer;
  z-index:10;
  position: absolute;
  top: -100px;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid  #e6ecf8;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  ///box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #e6ecf8;
  animation: ${slowFade} .8s;
  @media only screen and (min-width: 767px ) {
    width: 1350px;
    padding-left:110px ;
  }
`;



export const Row = styled.div`
  width:100%;
  height: 1.1px;
  display: flex;
  border-radius: 8px;
`;
export const Marker = styled.div<{pos:number}>`
  width: 110px;
  height:2px;
  background-color: #6667ab;
  border-radius: 8px;
  transform: translateX(${(props)=>props.pos}px);
  transition: all .5s ease-in-out;
`;

export const MenuElement = styled.span`
  height: 30px;
`;


export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;
export const Flex = styled.div`
  width:345px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;






