import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  justify-content: center;
  gap: 20px;

  
  .product-cards {
    gap: 20px;

    display: grid;
      grid-template-columns:repeat(1,1fr);

    }
  
  

  @media (min-width: 700px ) {    
    .product-cards {
      grid-template-columns:repeat(2,1fr);
      gap: 20px;
      width: 100%;
    }

    }

    @media (min-width: 1000px ) {    
    .product-cards {
      grid-template-columns:repeat(3,1fr);
      gap: 20px;
      width: 100%;

    }

  }
  

`
