import styled from "styled-components";

export const CustomButton = styled.button`
  height: 55px;
  background-color:#222;
  color:#fff;
  border: 3px solid #222;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  &:hover{
    background: #223;
  }
  `
export const PlayButton = styled.button`
  height: 55px;
  background: #fff;
  color: #6667ab;
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  &:hover{
    background: #6667ab;
    color: #fff;
  }
  `


