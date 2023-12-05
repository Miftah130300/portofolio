import { LandingPage } from './landing-page';
import { Navbar } from './navbar';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <LandingPage />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
