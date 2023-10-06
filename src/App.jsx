/**
 * Internal dependencies
 */
import List from './components/List'
import './App.css'

function App() {

  return (
    <>
      <h1>Gutenberg Icon Finder</h1>
      <p>
        Un buscador de íconos utilizados en <code>@wordpress/icons</code>
      </p>

      <h2>Lista de Iconos</h2>

      <List />
    </>
  )
}

export default App
