import Navbar from '../NavBar';
import ProductCard from '../ProductCard';
import SearchField from '../SearchField';
import { Container } from './styles';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <Container>
        <SearchField />
        <ProductCard />
        <ProductCard />
      </Container>
    </>
  );
};

export default Catalog;
