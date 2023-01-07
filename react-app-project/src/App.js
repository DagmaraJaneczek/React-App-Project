import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';
import Container from './components/Container/Container.js';
import NavBar from './components/NavBar/NavBar.js';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
      <Hero />
      <SearchForm />
      <List />
      <About />
      <Favorite />
    </Container>
    </main>
  );
};

export default App;
