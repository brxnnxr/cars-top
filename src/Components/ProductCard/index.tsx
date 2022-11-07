import CarRedImage from '../CarRedImage';
import { Card } from './styles';

const ProductCard = () => {
  return (
    <>
      <Card>
        <CarRedImage />
        <div className="text-container">
          <h1>Audi Supra TT</h1>
          <p>
            O Audi TT é um automóvel esportivo de duas portas produzido pela
            Audi desde 1998.
          </p>
          <button>COMPRAR</button>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
