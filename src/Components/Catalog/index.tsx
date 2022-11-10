import ProductCard from '../ProductCard';
import SearchField from '../SearchField';
import { Container } from './styles';

const Catalog = () => {
  return (
    <Container>
      <SearchField />
      <div className="product-cards">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
};

export default Catalog;
