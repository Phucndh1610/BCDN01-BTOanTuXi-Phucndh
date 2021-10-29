import './App.css';
import BaiTapOanTuXi from './BaiTapOanTuXi/BaiTapOanTuXi';
//redux
import {store} from './redux/configStore';
import {Provider} from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BaiTapOanTuXi/>
      </Provider>
    </div>
  );
}

export default App;
