import styled from "styled-components";

// Styled component named StyledButton
export const Container = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  cursor: pointer;
  background-color: #fff;
`;
export const ChildContainer = styled.div`
  width: 1128px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 20px 0;
`;

export const Row = styled.div`
  width:100%;
  height: 1.1px;
  display: flex;
  background-color: #fff;
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






