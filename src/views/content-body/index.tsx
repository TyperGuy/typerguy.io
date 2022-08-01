import {
  Container,
  ChildContainer,
  CardContainer,
  Flex,
  Row,
  Marker,
  MenuElement,
} from "./Content.styles";
import { useState } from "react";
import Projects from "../projects";
import Startups from "../startups";
import Experiences from "../stack";

const menuTitles: any = {
  projects: {
    title: "My Projects",
    component: <Projects />,
  },
  startups: {
    title: "My Startups",
    component: <Startups />,
  },
  experiences: {
    title: "Expreciences",
    component: <Experiences />,
  },
};
const Events: React.FC = () => {
  const [selected, setSelected] = useState("projects");
  const [pos, setPos] = useState(0);
  return (
    <Container>
      <ChildContainer>
        <Flex>
          <MenuElement
            onClick={() => {
              setPos(0);
              setSelected("projects");
            }}
          >
            {menuTitles.projects.title}
          </MenuElement>
          <MenuElement
            onClick={() => {
              setPos(115);
              setSelected("startups");
            }}
          >
            {menuTitles.startups.title}
          </MenuElement>
          <MenuElement
            onClick={() => {
              setPos(230);
              setSelected("experiences");
            }}
          >
            {menuTitles.experiences.title}
          </MenuElement>
        </Flex>
        <Row>
          <Marker pos={pos} />
        </Row>
        <div>{menuTitles[selected].component}</div>
      </ChildContainer>
    </Container>
  );
};

export default Events;
