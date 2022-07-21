import styled from 'styled-components';

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

export const ContentContainer = styled.div`
  width: 376px;
  height: 722px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;


