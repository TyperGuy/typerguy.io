import styled,{ keyframes } from 'styled-components';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  z-index: 20000;
  right: 20px;
  bottom: 20px;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  align-self:flex-end;
  place-items: center;
  border-radius: 50%;
  background-color: #6667ab;
  color: #fff;
  margin: 3px;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;


const fadeIn = keyframes`
 0%{
   opacity: 0;
 }
 100%{
  opacity: 1;
 }
`

export const ContentContainer = styled.div`
  width: 380px;
  height: 700px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  animation: ${fadeIn} .3s;
  -webkit-animatio: ${fadeIn} .3s;
  -moz-animation: ${fadeIn} .3s;
  -o-animation: ${fadeIn} .3s;
  -ms-animation:${fadeIn} .3s;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  overflow:hidden;
`;
export const Header = styled.div`
  width: 100%;
  height: 250px;
  background-image: -webkit-linear-gradient(135deg,rgb(38,50,56) 0%, rgb(0,0,0) 100%);
  background-color: red;
`;

export const Body = styled.div`
  width: 92%;
  height: 550px;
  margin: -200px 10px;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const Title = styled.div`
  font-size: 1.8em;
  color: white;
`;

export const Schedule = styled.div`
  width: 100%;
  height: 202px;
  background-color: #fff;
  border-radius: 3px;
  border-top: solid 2px #6667ab;
`;




