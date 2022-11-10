import styled from 'styled-components';





export const Card = styled.div `
  display: flex;
  justify-content: center;
  background-color: var(--clean-gray);
  border-radius: 10px;
  width: 100%;
  min-height: 85px;

 
  

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 70%;
    
    
    input {
      border-radius: 5px 0px 0px 5px;
      color: var(--clean-gray);
      border: none;
      width: 100%;
      height: 40px;
      padding-left: 15px;
      font-size: 14px;
}

    button {     
      background-color: var(--second);
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
      color: var(--white);
      border-radius: 0px 5px 5px 0px;
      width: 75px;
      height: 40px;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      padding: 12px 8px 14px;
    }

    @media (min-width: 700px ) {
        width: 100%;
        height: 125px;

        button {
          width: 174px;
        }
     }

    

    

  }
`

