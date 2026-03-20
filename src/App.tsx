import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Landing />
      </main>
      <Footer />
    </div>
  )
}

export default App
