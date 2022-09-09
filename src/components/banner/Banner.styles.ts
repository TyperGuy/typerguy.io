import styled from "styled-components";
import Image from 'next/image';
import Link from 'next/link';

// Styled component named StyledButton
export const Container = styled.div`
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: #6667ba;
  color: #fff;
  margin-top: 40px;
`;

export const ChildContainer = styled.div`
  height:100%;
  width: 100vw;
  display: grid;
  place-items: center;
  padding-top: 30px;
  padding-bottom: 60px;
  background-image: url('background-face.png');
`;

export const Stats = styled.div`
  margin: 60px 0 ;
  display: flex;
  flex-direction: column ;
  align-items: center;
  gap:1.5rem;
  text-align: center;
  @media screen and (min-width: 1276px) {
    width: 1128px;
    flex-direction: row;
  }
`;

export const LineDivisor = styled.div`
  height: 70px;
  width: 2px;
  background-color: #fff;
  border-radius: 16px;
  @media screen and (max-width: 1276px) {
    height: 2px;
    width: 200px;
  }
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Mylink = styled(Link)`
  height: 100%;
  width: 100%;
`;


export const Logo = styled(Image) `
  max-height: 60px;
  max-width: 60px
`

export const Item = styled.div<{isActive: boolean}> `
  height: 100%;
  padding: 0  0.5rem;
  display: grid;
  place-items: center;
  transition: all .2s ease-in-out;
  font-weight: ${(props)=>props.isActive? 'bold' : 'normal'};
  color: ${(props)=>props.isActive? '#F34747' : '#222'};
  border-bottom: 3px solid ${(props)=>props.isActive? '#F34747' : '#fff'};
  &:hover{
    background-color:#eee;
  }
`






