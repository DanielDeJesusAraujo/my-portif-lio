import './App.css';
import ContextProvide from './context/provider';
import MainRoutes from './routes/routes';

function App() {
  return (
    <div className="App">
      <ContextProvide>
        <MainRoutes />
      </ContextProvide>
    </div>
  );
}

export default App;
