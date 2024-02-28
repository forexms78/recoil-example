import './App.css';
import Counter from "./component/Counter";
import {RecoilRoot} from "recoil";
import TodoList from "./component/TodoList";

function App() {
  return (
   <RecoilRoot>
     <div className={App}>
       <h1>Recoil Example</h1>
       <Counter/>
       <h1>Recoil TodoList</h1>
         <TodoList/>
     </div>
   </RecoilRoot>
  );
}

export default App;
