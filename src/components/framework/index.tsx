import {
  Container,
  Cover,
  Description,
  Flex,
  Footer,
  Link,
  Tecnology,
  Title,
} from "./Experience.styles";
import Lottie from "react-lottie";
import animationData from "../../lotties/not-found.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const Project: React.FC = () => {
  return (
    <Container>
      <Lottie options={defaultOptions} height={50} width={50} />
    </Container>
  );
};

export default Project;
