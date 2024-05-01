import './App.css'
import Card from './components/Card'

function App()
{
  return (
    <>
      <h1 className="text-3xl font-bold bg-green-400 rounded mb-6">
        Hallo Wereld
      </h1>
      <Card title="Nieuwe Werld" />
      <Card title="Oude Werld" />
    </>
  )
}

export default App
