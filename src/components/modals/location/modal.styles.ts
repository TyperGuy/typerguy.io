import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;;
  height: 100vh;
  top:0;
  background-color: rgba(1,1,1 ,0);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`

export const ChildContainer = styled.div`
  left: 0;
  bottom: 0;
  position: fixed;
  z-index: 50000;
  transition: all 3s ease-in-out;
`

