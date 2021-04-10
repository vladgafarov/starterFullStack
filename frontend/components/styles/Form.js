import styled from 'styled-components'
import tw from 'twin.macro'

const Form = styled.form`
   margin: 0 auto;
   position: relative;
   ${tw`
      rounded border-2 border-gray-400 shadow
      p-6 mb-10
      text-2xl text-black
      max-w-2xl
      bg-white
   `}
   border-image-source: radial-gradient(
      circle farthest-corner at 12.3% 19.3%,
      #AB56D8 0%,
      #EF444A 100.2%
   );
   border-image-slice: 1;
   h1 {
      ${tw`font-pm text-4xl mb-4`}
   }
   label {
      ${tw``}
   }
   input {
      ${tw`
         px-5 py-3
         border-2 border-gray-300 rounded transition 
         w-full
         font-pm
         focus:border-purple-500
         hover:shadow
      `}
   }
   input,
   button {
      outline: none;
   }
   fieldset {
      ${tw`flex flex-col space-y-5`}
      &[disabled] {
         opacity: 0.5;
      }
   }
   .children {
      ${tw`
         text-center pt-4 text-blue-500
      `}
      button:not([type='submit']) {
         ${tw`hover:underline`}
      }
   }
`

export default Form
