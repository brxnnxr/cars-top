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

  @media (min-width: 768px ) {
    span {
      display: none;
    }
  }
  
`;
  export const Menu = styled.div `
  display: flex;
  background-color: var(--primary);
  padding-left: 20px;
  padding-bottom: 30px;
  width: 100%;

 

    a {
      color: var(--second);
      font-size: 18px;
    }

      a.active {
      color: var(--second);
      font-weight: bold;
}
    
 `

export const Content = styled.div `

   display: flex;
   width: 100%;
   max-width: 980px;
   justify-content: space-between;
   align-items: center;
   margin: 0 auto;

 

`



