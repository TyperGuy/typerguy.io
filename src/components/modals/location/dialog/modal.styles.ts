import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 50000;
  background-color: #9C9C9C85;
  background: transparent;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  .close {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`

export const Content = styled.div`
  width: 400px;
  height: 260px;
  background-color: #fff;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:1rem;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const Description = styled.p`
  font-size: 1rem;
  width: 80%;
  text-align: justify;
  font-weight: 300;
  color: #808080;
  margin: 0;
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  background-color: #6667ab;
  font-weight: 700;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border: none;
  &:hover{
    background-color:rgba(102, 103, 171,.8);
  }
`
export const Span = styled.button`
  height: 40px;
  background: #fff;
  border: none;
  color: #222;
  font-weight: 400;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 600 ;
`

export const Linker = styled.a`
  text-decoration: underline;
  font-weight: 600 ;
  cursor: pointer;
  &:hover{
   color:#F34747;
  }
`


