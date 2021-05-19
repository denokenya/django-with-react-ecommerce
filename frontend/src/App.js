import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-5 '>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={Product}  />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
