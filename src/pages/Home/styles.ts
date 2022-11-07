import styled from 'styled-components';


export const Container = styled.div `
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
  border-radius: 10px;
  width: 100%;
  height: 365px;
  padding: 60px 10px;
  gap: 35px; 

  div {
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
  
  h1 {
    font-size: 22px;
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
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 37px;
  text-align: center;
}

p {
  margin-top: 10px;
  font-size: 18px;
  font-weight: 400;
}
`