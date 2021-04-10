import Head from 'next/head'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import wait from 'waait'
import { useModal } from '../lib/modalState'
import { gradient } from './Page'
import RequestReset from './RequestReset'
import SignIn from './SignIn'
import SignUp from './SignUp'
import Button from './styles/Button'

const Modal = styled.div`
   z-index: 1000;
   position: fixed;
   width: 100%;
   height: 100%;
   padding-top: 80px;
   top: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.5);
   transition: 0.25s ease-in-out;
   ${props => !props.isOpen && `opacity: 0; pointer-events: none;`}
`

const CloseButton = styled.span`
   position: absolute;
   top: 16px;
   right: 20px;
   font-size: 24px;
   cursor: pointer;
   color: black;
`

const SignInModal = () => {
   const { modalOpen, closeModal: closeModalHook, loading } = useModal()
   const [modal, setModal] = useState('signin')

   const setInitial = async () => {
      await wait(250)
      setModal('signin')
   }

   const closeModal = () => {
      closeModalHook()
      setInitial()
   }

   const handleClick = e => {
      if (e.target == e.currentTarget) {
         closeModal()
      }
   }

   useEffect(() => {
      document.addEventListener('keyup', e => {
         if (e.key == 'Escape') {
            closeModal()
         }
      })
   }, [modal])

   return (
      <Modal onClick={handleClick} isOpen={modalOpen}>
         {modal == 'reset' && (
            <RequestReset>
               <CloseButton onClick={closeModal}>&times;</CloseButton>
            </RequestReset>
         )}
         {modal == 'signin' && (
            <>
               <SignIn>
                  <button type="button" onClick={() => setModal('reset')}>
                     Forgot your password?
                  </button>
                  <br />
                  <Button type="submit" className={gradient + ' my-3'}>
                     Sign In
                  </Button>
                  <br />
                  <button type="button" onClick={() => setModal('signup')}>
                     Or Sign Up
                  </button>
                  <CloseButton onClick={closeModal}>&times;</CloseButton>
               </SignIn>
            </>
         )}
         {modal == 'signup' && (
            <>
               <SignUp>
                  <button type="button" onClick={() => setModal('signin')}>
                     Sign in
                  </button>
                  <CloseButton onClick={closeModal}>&times;</CloseButton>
               </SignUp>
            </>
         )}
      </Modal>
   )
}

export default SignInModal
