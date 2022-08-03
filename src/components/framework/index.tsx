import { Container, Image } from "./Experience.styles";
import Data from "../../data/techs.json";

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
  return (
    <Container>
      <Image src={icon} alt={techKey} />
    </Container>
  );
};

export default Project;
