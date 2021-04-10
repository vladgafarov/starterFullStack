import { createContext, useState, useContext } from 'react'
import wait from 'waait'

const LocalStateContext = createContext()
const LocalStateProvider = LocalStateContext.Provider

export const ModalStateProvider = ({ children }) => {
   const [modalOpen, setModalOpen] = useState(false)
   const [loading, setLoading] = useState(true)

   const openModal = () => {
      setLoading(false)
      const body = document.body
      body.style.top = `-${window.scrollY}px`
      body.style.position = 'fixed'
      body.style.paddingRight = `15px`
      setModalOpen(true)
   }

   const closeModal = async () => {
      setModalOpen(false)
      setLoading(true)
      const body = document.body
      const scrollY = body.style.top
      body.style.position = ''
      body.style.top = ''
      body.style.paddingRight = `0`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
   }

   return (
      <LocalStateProvider
         value={{
            modalOpen,
            openModal,
            closeModal,
            loading,
            setLoading,
         }}
      >
         {children}
      </LocalStateProvider>
   )
}

export const useModal = () => {
   const all = useContext(LocalStateContext)
   return all
}
