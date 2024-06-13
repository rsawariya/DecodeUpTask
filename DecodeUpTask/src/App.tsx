import './App.css'
import { FormProvider } from './context/FormContext'

import HomePage from './pages/HomePage'

function App() {

  return (
    <FormProvider>
      <HomePage />
    </FormProvider>
  )
}

export default App
