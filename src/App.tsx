import './App.scss'
import Hero from './components/UI/Hero/Hero'
import Layout from './components/UX/Layout/Layout'
import Services from './components/UX/Services/Services'

function App() {

  return (
    <>
      <Layout>
        <Hero />
        <Services />
      </Layout>
    </>
  )
}

export default App
