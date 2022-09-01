
import {Container, ProjectContainer, Subtitle, Title} from './Projects.styles';
import ProjectCard from '../../components/project';


const Projects : React.FC =()=>{

  return(
    <Container>
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
