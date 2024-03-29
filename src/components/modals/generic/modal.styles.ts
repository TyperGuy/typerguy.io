import styled ,{keyframes} from 'styled-components';

const slowFade = keyframes`
  from{
    opacity:0;
    transform:scale(0);
  }

  to{
    opacity:1;
    transform:scale(1);
  }
`
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top:0;
  left:0;
  z-index: 50000;
  background-color: rgba(1,1,1 ,.2);
  display:grid;
  place-items: center;
  
`



export const ContentContainer = styled.div`
  max-width: 500px;
  border-radius: 6px;
  background-color: #fff;
  display: flex ;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
  animation-name:${slowFade};
  animation-duration: .3s;
  padding: 20px;
  gap: 40px;
  border-top: 5px solid #f15f;
`
export const Header = styled.div`
height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Row = styled.div`
  width: 100%;
  height: 4px;
  border-radius:8px 8px 0 0;
`
export const CloseBtn = styled.button`
  width: 25px;
  height: 25px;
  border-radius:50%;
  background-color: #eee;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: #F34747;
    background-color:rgba(255,0,0,.1);
  }
  &:focus{
    color: #F34747;
    background-color:rgba(255,0,0,.1);
    outline-style:solid;
    outline-color:#222;
    border: 2px solid #fff;
    outline-width: medium;;
  }
`
