import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`
   ${tw`
      p-4 
      rounded 
      text-white font-pm
      transition
      hover:shadow-lg
      focus:ring-2
      focus:ring-purple-400
      to-red-400
      w-full
   `}
`

export default Button
