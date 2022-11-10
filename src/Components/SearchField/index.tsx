import { Card } from './styles';

const SearchField = () => {
  return (
    <>
      <Card>
        <div>
          <input type="text" placeholder="Digite sua busca" />
          <button>BUSCAR</button>
        </div>
      </Card>
    </>
  );
};

export default SearchField;
