import {Routes, Route} from 'react-router-dom';
import Landing from './components/landing/landing.component';
import Header from './components/header/header.component';
import GlobalStyles from './global.styles';

function App() {
  return (
    <div>
      <GlobalStyles/>
        <Header/>
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
        </Routes>
    </div>
  );
}
export default App;
