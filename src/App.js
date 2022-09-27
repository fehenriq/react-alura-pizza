import { useEffect, useState } from 'react';
import './App.css';
import Prato from './components/Prato/Prato';

function App() {
  const [pratos, setPratos] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/pratos/')
      .then(resposta => resposta.json())
      .then(dados => {
        setPratos(dados)
      })
  }, [])

  return (
    <div className="App">
      <div className='banner-container'>
        <img src="/img/banner.png" alt="banner mostrando uma pizza" />
      </div>
      <div className='logo-container'>
        <img src="/img/logo.png" alt="logo do alura pizza" />
      </div>
      <section className='cardapio'>
        {pratos.map(prato => 
        (<Prato 
          key={prato.id} 
          nome={prato.nome} 
          descricao={prato.descricao} 
          imagem={prato.imagem}
          preco={prato.preco}
        />))}
      </section>
    </div>
  );
}

export default App;
