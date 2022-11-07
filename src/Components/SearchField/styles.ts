import styled from 'styled-components';

export const Card = styled.div `
  display: flex;
  justify-content: center;
  background-color: var(--clean-gray);
  border-radius: 10px;
  width: 100%;
  height: 85px;
  margin-top: 20px;  

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;

    input {
      border-radius: 5px 0px 0px 5px;
      color: var(--clean-gray);
      border: none;
      width: 200px;
      height: 40px;
      padding-left: 15px;
      font-size: 14px;

}

    button {     
      background-color: var(--second);
      color: var(--white);
      border-radius: 0px 5px 5px 0px;
      width: 75px;
      height: 40px;
      font-size: 14px;
      font-weight: 700;


    }
  }
`

