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
  margin: 20px 10px;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 40px 10px; 
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
    padding-left: 20px;
    margin-top: 15px;
  }

  button {
    background-color: var(--second);
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
