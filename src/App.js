import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import AssessScreen from './screens/AssessScreen';
import PrepareScreen from './screens/PrepareScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import MassLawScreen from './screens/MassLawScreen';
import AboutUsScreen from './screens/AboutUsScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/assess' component={AssessScreen} exact />
          <Route path='/prepare' component={PrepareScreen} exact />
          <Route path='/resources' component={ResourcesScreen} exact />
          <Route path='/massLaw' component={MassLawScreen} exact />
          <Route path='/aboutUs' component={AboutUsScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
