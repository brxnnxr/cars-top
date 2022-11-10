import styled from 'styled-components';



export const Container = styled.div `
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 650px;
  width: 100%;
  padding: 20px 10px;
 
`
export const Card = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--second);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
  height: 365px;
  padding: 60px 10px;
  gap: 35px; 

  div svg {
    display: flex;
    align-items: center;
    justify-content: center;   
}

.text-container {
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
  max-width: 500px;

  p {
    font-size: 14px;
  }
  
  h1 {
    font-size: 22px;
  }

  @media (min-width: 576px ) {
  h1 {
    font-size: 36px;
  }

  p {
    font-size: 18px;
  }

  div svg {
    width: 330px;
    height: 200px;

  }
}
}

@media (min-width: 992px) {
  height: 580px;
}

@media (min-width: 1200px) {
  flex-direction: row-reverse;
  height: 365px;
  width: 980px;
  
  
  .text-container {
  align-items: flex-start;

  }
}
`
export const Catalog = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--clean-gray);
  width: 100%;
  height: 123px;
  border-radius: 10px;
  margin-top: 20px;

button {
  color: var(--white);
  background-color: var(--second);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 37px;
  text-align: center;
}

p {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 400;
  color: var(--mono-chromatic)
}

@media (min-width: 576px ) {
  flex-direction: row;
  justify-content: center;
  gap: 15px 
}

@media (min-width: 768px ) {
  flex-direction: row;
  justify-content: start;
  gap: 15px;

  button {
    margin-left: 85px;
  }

  p {
    font-size: 18px;  
  }  

  @media (min-width: 1200px) {
  
  display: flex;
  align-items: center;
  width: 980px;
  justify-content: start;
}
}
`