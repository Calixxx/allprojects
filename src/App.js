import './styles/style.css'
import CardProject from "./components/CardProject";
import Me from "./components/Me";

function App() {
  return (
    <div className="App">
      <main className='mx-4 sm:mx-16 md:mx-12 lg:mx-36  '>
        <Me/>
        <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-4  2xl:gap-16'>
          <CardProject/>
        </div>
        
      </main>
      
    </div>
  );
}

export default App;
