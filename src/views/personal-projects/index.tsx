
import {Container, ExperiecesContainer, Subtitle, Title} from './Projects.styles';
import ExperienceCard from '../../components/exprecience';


const Experiences : React.FC =()=>{

  return(
    <Container>
      <div>
        <Title>My work experiences</Title>
        <Subtitle>A list of where I have worked in the last 5 years</Subtitle>
      </div>
      <ExperiecesContainer>
        <ExperienceCard/>
      </ExperiecesContainer>
    </Container>
  )
}

export default Experiences;
