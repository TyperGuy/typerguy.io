import styled from "styled-components";

export const CustomButton = styled.button`
  height: 55px;
  background-color:#222;
  color:#fff;
  border: 3px solid #222;
  border-radius: 8px;
  transition: all .5s ease-in-out;
  box-shadow: rgba(34, 34, 34, 0.5) 0px 7px 29px 0px;
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
  transition: all .5s ease-in-out;
  box-shadow: rgba(102, 103, 171, 0.5) 0px 7px 29px 0px;
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


