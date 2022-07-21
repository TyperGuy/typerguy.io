
import {Container,ChildContainer,CardContainer,Flex, Row, Marker} from './Content.styles';
import { useState } from 'react';
import Projects from '../projects';
import Startups from '../startups';
import Experiences from '../personal-projects';

const menuTitles: any = {
  projects: {
    title : 'My Projects',
    component : <Projects/>
  },
  startups: {
    title : 'My Startups',
    component : <Startups/>
  },
  experiences: {
    title : 'Expreciences',
    component : <Experiences/>
  }
}
const Events : React.FC =()=>{
  const [selected,setSelected] = useState("projects");
  const [pos,setPos] = useState(0);
  return(
    <Container>
      <ChildContainer>
        <Flex>
          <span onClick={()=> {setPos(0);setSelected("projects")}}>{menuTitles.projects.title}</span>
          <span onClick={()=> {setPos(110);setSelected("startups")}}>{menuTitles.startups.title}</span>
          <span onClick={()=> {setPos(230);setSelected("experiences")}}>{menuTitles.experiences.title}</span>
        </Flex>
        <Row><Marker pos={pos}/></Row>
        <div>
          {menuTitles[selected].component}
        </div>
      </ChildContainer>

    </Container>
  )
}

export default Events;
