import {createGlobalStyle} from 'styled-components'
import {colors} from 'assets'

export default createGlobalStyle`
  * {
    font-family: Avenir, sans-serif;
    padding: 0;
    margin: 0;
    outline: none;
  }

  body,
  select,
  button {
    color: ${colors.black};
    background: ${colors.global};
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: rgba(0, 0, 0, .1);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .4);
  }
`