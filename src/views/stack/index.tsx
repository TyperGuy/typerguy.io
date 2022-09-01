import { Container, ExperiecesContainer, Title } from "./Stacks.styles";
import ExperienceCard from "../../components/framework";
import Data from "../../data/techs.json";

const Experiences: React.FC = () => {
  return (
    <Container>
      <ExperiecesContainer>
        {Data.languages.map((lang) => (
          <ExperienceCard key={lang.techKey} {...lang} />
        ))}
      </ExperiecesContainer>
    </Container>
  );
};

export default Experiences;
