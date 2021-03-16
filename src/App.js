import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particle from "react-particles-js";
import Navbar from "./componnents/Navbar";
import Header from "./componnents/Header";
function App() {
  return (   
    <> 
    <Particle 
      className="particles-canvas"
      params={{
        particles:{
          number:{
            value: 30,
            density:{
              enable: true,
              value_area: 900
            }
          },
          shape:{
             type: "circle", 
            // type: "star",
            // type: "square",
            stroke:{
              width: 10,
              color: "#ef4035"
            }
          },
        }
      }}
    />
    <Navbar /> 
    <Header />
    </>
  );
}

export default App;
