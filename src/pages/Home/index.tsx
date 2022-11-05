import { CarYellowImage } from '../../Components';
import './styles.css';

export const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-image-container">
          <CarYellowImage />
        </div>
        <h1>O carro perfeito para você</h1>
        <p>
          Conheça nossos carros e dê mais um passo na realização do seu sonho
        </p>
      </div>
      <div className="home-content-container">
        <button>VER CATÁLOGO</button>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  );
};
