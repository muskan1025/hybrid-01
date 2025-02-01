import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="col">
        <Card
          imgSrc="https://th.bing.com/th/id/R.f19060b7c1521381597b4edf72428271?rik=SpaprjIc5o2pjQ&riu=http%3a%2f%2fwww.sun.org%2fuploads%2fimages%2fThe_Andromeda_Galaxy_M31.jpg&ehk=2BMVZnXmBtd7ovFvLtS9eaXUrTs7dQdjjpmsxLIpudk%3d&risl=&pid=ImgRaw&r=0"
          imgAlt="Galaxy"
          title="Galaxy"
          description="The Andromeda Galaxy is - at a distance of 2.5 million light years - the closest spiral galaxy to us. Until 1923 when Edwin Hubble discovered that it is a galaxy in its own right it was not clear whether Andromeda was a nebula within our own Milky Way or another 'island Universe'."
          buttonText="Click here!"
          link="card1"
        />
        
      </div>
      
       
      
    </div>
  );
}

export default App;