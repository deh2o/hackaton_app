import ButtonGradient from "./assets/svg/ButtonGradient";
import { Header, Home, Products, About, Team } from "./components/";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Home />
        <Products />
        <About />
        <Team />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
