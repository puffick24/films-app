import style from '../../styles/App.module.css'

import Header from '../Catalog/Header/Header';
import Main from '../Catalog/Main/Main';

function App() {

  return (
    <div className={style.App}>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
