import styled from 'styled-components';

export const Card = styled.div `
  background-color: var(--clean-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  border-radius: 10px;
  width: 100%;
  height: 350px;
  padding: 10px;;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 40px 10px; 
  }

  @media (min-width: 1000px ) {
    width: 310px;
  }

     
    
  .text-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      h1 {
        font-size: 18px;
        text-align: center;
        margin-top: 10px;
      }
      
      p {
        font-size: 14px;
        color: var(--mono-chromatic);
        margin-top: 36px;
        align-items: center;
        text-align: center;
        width: 100%;
  }

  button {
    background-color: var(--second);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-size: 14px;
    border-radius: 10px;
    width: 257px;
    height: 40px;
    margin: 38px 20px 10px;
    text-align: center;
    font-weight: 700;
  }  
}
  
`


