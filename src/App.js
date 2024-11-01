import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <ItemListContainer greeting="Bem-vindo ao Compra Fácil!" />
      </main>
      <Footer />
    </div>
  );
}

export default App;