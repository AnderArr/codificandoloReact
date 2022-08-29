import { Cards } from "./components/Cards";

function App() {
  return (
    <div>
      <h1>Propiedades de los componentes</h1>

      <hr />
      <div className="row">
        <div className="col">
          <Cards 
            imagen="https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="Titulo Card 1"
            texto="Textp de la Card 1"
            />
        </div>

        <div className="col">
          <Cards 
            imagen="https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="Titulo Card 2"
            texto="Textp de la Card 2"
            />
        </div>

        <div className="col">
          <Cards 
            imagen="https://images.pexels.com/photos/8473212/pexels-photo-8473212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titulo="Titulo Card 3"
            texto="Textp de la Card 3"
            />
        </div>
      </div>
    </div>
  );
}

export default App;
