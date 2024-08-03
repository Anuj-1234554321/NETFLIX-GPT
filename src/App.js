import './index.css'
import Body from './Components/Body'
import { Provider } from'react-redux';
import appStore from './Utils/appStore';
function App() {
  return (
    <div className="App">
   <Provider store = {appStore}>
   <Body/>
   </Provider>
    </div>
  );
}

export default App;
