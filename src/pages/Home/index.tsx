import { Link } from 'react-router-dom';
import { CarYellowImage } from '../../Components';
import { Card, Catalog, Container } from './styles';

export const Home = () => {
  return (
    <Container>
      <Card>
        <div>
          <CarYellowImage />
        </div>

        <div className="text-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </Card>
      <Catalog>
        <Link to="/catalog">
          <button>VER CATÁLOGO</button>
        </Link>
        <p>Comece agora a navegar</p>
      </Catalog>
    </Container>
  );
};
