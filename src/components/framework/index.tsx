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


const Project: React.FC<TechPropsType> = ({ techKey, icon, inf }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image src={icon} alt={techKey} />
      {isHover && (
        <Description>
          <Arrow />
          <span>{inf.name}</span>
        </Description>
      )}
    </Container>
  );
};

export default Project;
