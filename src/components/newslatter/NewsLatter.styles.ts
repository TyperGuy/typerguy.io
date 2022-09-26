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
  width: 100%;
  position: relative;
  background-color: #fafafa;
  display:flex;
  align-items: center;
  justify-content: center ;
  margin-top: -100px;
  padding: 20px 0;
`



export const ContentContainer = styled.div`
  width: 1200px;
  height: 200px;
  background-image: -webkit-linear-gradient(139deg,#f15f,#f15f79);
  margin-bottom: 100px;
  border-radius: 8px;
`
export const Content = styled.div`
width:100% ;
height: 100%;
 background-image: url('background-face.png');
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
  margin:10px;
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
