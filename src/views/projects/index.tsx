
import {Container, ProjectContainer, Subtitle, Title} from './Projects.styles';
import ProjectCard from '../../components/project';


const Projects : React.FC =()=>{

  return(
    <Container>
      <div>
        <Title>Find my projects here</Title>
        <Subtitle>You can use these projects to evaluate my works</Subtitle>
      </div>
      <ProjectContainer>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </ProjectContainer>
    </Container>
  )
}

export default Projects;
