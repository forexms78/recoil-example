import './App.css';
import Counter from "./component/Counter";
import {RecoilRoot} from "recoil";

function App() {
  return (
   <RecoilRoot>
     <div className={App}>
       <h1>Recoil Example</h1>
       <Counter/>
     </div>
   </RecoilRoot>
  );
}

export default App;
