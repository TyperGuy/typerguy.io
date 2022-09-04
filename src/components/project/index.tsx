import { ArrowSquareOut } from "phosphor-react";
import {
  Container,
  Cover,
  Description,
  Flex,
  Footer,
  GitHub,
  Link,
  Title,
} from "./Project.styles";
import { FaGithubAlt } from "react-icons/fa";
import { useState } from "react";

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

const Project: React.FC = () => {
  const [index, setIndex] = useState(0);
  function getRandomColor(colors: string[]): number {
    // get random index value from 0 to array.length-1
    const randomIndex = Math.floor(Math.random() * colors.length);
    if (randomIndex === index) return getRandomColor(colors);
    return randomIndex;
  }

  return (
    <Container
      onMouseOver={() => setIndex(getRandomColor(colors))}
      colorsArray={colors}
      index={index}
    >
      <Cover src={"/cover.webp"} />
      <Title>Ministério ao</Title>
      <Description>
        An all-in-one starter kit for high-performance e-commerce sites.
      </Description>
      <Footer>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <GitHub>
            <FaGithubAlt size={18} />
          </GitHub>
          <Link>
            <ArrowSquareOut size={18} weight="fill" />
          </Link>
        </div>
      </Footer>
    </Container>
  );
};

export default Project;
