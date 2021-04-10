import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Header from './Header'
import 'tailwindcss/tailwind.css'
import 'tippy.js/dist/tippy.css'
import tw from 'twin.macro'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'proxima';
    src: url('/static/proxima/ProximaNova-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'proxima-medium';
    src: url('/static/proxima/ProximaNova-Semibold.woff') format('woff');
    font-style: normal;
  }
  @font-face {
    font-family: 'proxima-bold';
    src: url('/static/proxima/ProximaNova-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  html {
    --maxWidth: 1000px;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'proxima', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height:2;
    width: 100%
  }
  a:hover {
    text-decoration: underline;
  }
  .animation-link {
    text-decoration: none;
    position: relative;
  }
  .animation-link::after {
      position: absolute;
      bottom: 0;
      left: 50%;
      content: '';
      display: block;
      height: 3px;
      width: 0;
      transform: translateX(-50%);
      background-color: #000;
      transition: 0.2s ease-in-out;
   }
   .animation-link:hover::after {
      width: 100%;
   }
  button {
    outline: none;
  }
  button:focus {
    outline: none;
  }
  ul {
    list-style-type: disc;
    ${tw`pl-10`}
  }
`

const InnerStyles = styled.div`
   max-width: var(--maxWidth);
   margin: 0 auto;
   padding: 2rem;
`

const Page = ({ children }) => {
   return (
      <div>
         <GlobalStyles />
         <Header />
         <InnerStyles>{children}</InnerStyles>
      </div>
   )
}

export default Page
