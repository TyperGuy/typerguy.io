import styled from "styled-components";


// Styled component named StyledButton

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
    border: 2px solid #fff;
    outline-width: medium;
    outline-color: #6667cb;
  }
`;
export const Textarea = styled.textarea`
  min-width: 100%;
  height: 320px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 2px solid #d9d9d9;
  background-color: #d9d9d9;
  padding: 1rem;
  transition: all 0.2s ease-in;
  font-size:1rem;
  resize: none;
  &:focus{
    outline-style: solid;
    border: 2px solid #fff;
    outline-width: medium;
    outline-color: #6667cb;
  }
  @media only screen and (max-width: 375px){
    height: 200px;
  }
`;
export const Button = styled.button`
  height: 55px;
  width: 200px;
  background:#6667ab;
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
    outline-color:#222;
    border: 2px solid #fff;
    outline-width: medium;;
  }
`


export const Message = styled.div`
    @media only screen and (max-width: 375px){
    display: none;
  }
  `


