import { Container, Image} from "./Experience.styles";
import { AiOutlineArrowRight as Arrow } from "react-icons/ai";
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

      <span>{inf.name}</span>
      {isHover && (
          <Arrow />
      )}
    </Container>
  );
};

export default Project;
