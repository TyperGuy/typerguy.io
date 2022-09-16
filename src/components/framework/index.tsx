import { Container, Image, Description, Arrow } from "./Experience.styles";
import Data from "../../data/techs.json";
import { useState } from "react";

interface TechPropsType {
  techKey: string;
  icon: string;
  inf: {
    name: string;
    useSince: number;
    category: string;
  };
}

const colors = [
  "#00b9ae",
  "#ea3546",
  "#ef476f",
  "#ff9500",
  "#3a6ea5",
  "#05668d",
  "#ffadad",
  "#0cf574",
];

const Project: React.FC<TechPropsType> = ({ techKey, icon, inf }) => {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  function getRandomColor(colors: string[]): number {
    // get random index value from 0 to array.length-1
    const randomIndex = Math.floor(Math.random() * colors.length);
    if (randomIndex === index) return getRandomColor(colors);
    return randomIndex;
  }
  return (
    <Container
      onMouseOver={() => {
        setIndex(getRandomColor(colors));
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image src={icon} alt={techKey} />
      {isHover && (
        <Description>
          <Arrow />
          <span>Firebase</span>
        </Description>
      )}
    </Container>
  );
};

export default Project;
