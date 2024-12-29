import { Timer as TimeProps} from '../store/TimersContext.tsx';
import Container from './UI/Container.tsx';




export default function Timer({name, duration}: TimeProps) {
  return (
    <Container as="article">
      <h2>TODO: TIMER NAME</h2>
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
