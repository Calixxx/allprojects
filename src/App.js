import './styles/style.css'
import CardProject from "./components/CardProject";
import Me from "./components/Me";

function App() {
  return (
    <div className="App">
      <main className='mx-4 sm:mx-16 md:mx-32'>
        <Me/>
        <CardProject/>
      </main>
      
    </div>
  );
}

export default App;
