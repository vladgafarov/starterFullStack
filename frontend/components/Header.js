import Link from 'next/link'
import styled from 'styled-components'

const HeaderStyles = styled.header`
   .bar {
      border-bottom: 10px solid var(--black, black);
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: stretch;
   }
`

const Header = () => {
   return (
      <HeaderStyles>
         <div className="bar bg-red-300">
            <Link href="/">Starter</Link>
         </div>
      </HeaderStyles>
   )
}

export default Header
