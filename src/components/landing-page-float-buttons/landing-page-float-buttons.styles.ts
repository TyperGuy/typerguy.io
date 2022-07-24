import styled,{ keyframes } from 'styled-components';



export const TurnBig = keyframes`
 0%{
  height: 230px;
 }
 100%{
  height: 250px;
 }
`;


export const SlideUp = keyframes`
 0%{
  
 }
 100%{
  
 }
`;

const FadeIn = keyframes`
 0%{
   visibility: hidden;
   transform: scale(.9);
 }
 25%{
  visibility: visible;
  transform: scale(1);
 }`
 ;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: fixed;
  z-index: 20000;
  right: 20px;
  bottom: 20px;
`;

export const Div = styled.div`
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
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  overflow:hidden;
`;
export const Header = styled.div`
  width: 100%;
  height: 250px;
  background-image: -webkit-linear-gradient(135deg,rgb(38,50,56) 0%, rgb(0,0,0) 100%);
  animation: ${TurnBig} .3s;
`;

export const Body = styled.div`
  width: 92%;
  height: 650px;
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
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 3px;
  border-top: solid 2px #6667ab;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  gap: 16px;
  animation: ${FadeIn} 1s;
`;
export const FQA = styled.div`
  width: 100%;
  height: 300px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 3px;
  border-top: solid 2px #6667ab;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  gap: 16px;
  animation: ${FadeIn} 1s;
`;


export const ScheduleBtn = styled.button`
  width: 200px;
  height: 40px;
  background-color: #6667ab;
  color: #fff;
  font-size: .9em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:hover{
    background-color: #222;
  }
`;


export const Question = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  width: 100%;
  height: 40px;
  color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  cursor: pointer;
`;
export const Answer = styled.div`
  width: 90%;
  height: 50px;
  border-left: 2px solid rgba(0,0,0,.5);
  color: rgba(0,0,0,.5);
  padding-left: 5px;
`;






