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
  @media only screen and (max-width: 375px){
    margin-top:0;
  }
`



export const ContentContainer = styled.div`
  width: 1350px;
  height: 200px;
  background-image: -webkit-linear-gradient(139deg,#f15f,#f15f79);
  border: 1px solid #e6ecf8;
  box-shadow: rgba(0,0,0,0.1) 0px 20px 25px -5px,rgba(0,0,0,0.04) 0px 10px 10px -5px;
  margin-bottom: 100px;
  border-radius: 8px;
  color: #fff;
  @media only screen and (max-width: 375px){
    width: 90%;
    height: 400px ;
  }
`
export const Content = styled.div`
  width:100% ;
  height: 100%;
  background-image: url('background-face.png');
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 375px){
    flex-direction: column;
    justify-content:center;
    gap: 3rem;
  }
`

export const TextContainer = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 100px;
  span{
    max-width: 350px;
    font-size: 27px;
    font-weight: 700;
    line-height: 1.26;
    letter-spacing: normal;
    color: #fff;
  }
  @media only screen and (max-width: 375px){
    width: 90% ;
    margin-left: 10px;
    gap: 1rem;
    span{
    font-size: 17px;
    font-weight: 700;
    line-height: 1.26;
    }
  }
`

export const ButtonCotainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 100px;
  @media only screen and (max-width: 375px){
    width: 90% ;
    margin-right: 0;
    gap: 1rem;
    span{
    font-size: 17px;
    font-weight: 700;
    line-height: 1.26;
  }
`
export const Input = styled.input`
  width:100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 1.6rem 1rem;
  transition: all 0.2s ease-in;
  height: 45px;
  border: 2px solid #d9d9d9;
  background-color: #d9d9d9;
  transition: all 0.2s ease-in;
  font-size:1rem;
  &:focus{
    outline-style: solid;
    border: 2px solid #f15f;
    outline-width: medium;
    outline-color: #6667cb;
  }
`;

export const Button = styled.button`
  height: 55px;
  width: 100%;
  background:#222;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.05s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 0 1.5rem;
  cursor: pointer;
  &:hover{
    background:#6667cb;
  }
  &:focus{
    outline-style:solid;
    outline-color: #6667cb;
    border: 2px solid #f15f;
    outline-width: medium;;
  }
`
