import styled from 'styled-components';

export const Container = styled.nav`
  background-color: var(--primary);
  width: 100%;
  height: 70px;
  padding: 20px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  
  a {
    font-size: 24px;  
    font-weight: 700;
    color: var(--second)
  }

  svg {
    fill: var(--second);
    width: 35px;
    height: 20px;
  }
  
`;
  export const Menu = styled.div `
  background-color: var(--primary);
  padding-left: 20px;
  padding-bottom: 30px;


    a {
      color: var(--second);
      font-size: 18px;
    }

    a:hover {
      color: #fff;
    }

    
 `;


