import {createGlobalStyle} from 'styled-components/'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  font-family: 'roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --primary: #F78B00;
  --second: #00285F;
  --white: #fff;
  --clean-gray: #EDEDED;
}

button {
  border:none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  margin-bottom: 0;
}

a,
a:hover {
  text-decoration: none ;
  color: unset;
}

li {
  list-style-type: none;
}

.base-card {
  background-color: #00285f;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
`

export default GlobalStyles