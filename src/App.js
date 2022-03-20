
import './App.css';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';

function App() {
  const [{user, basket}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >> ', authUser)

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [user, basket])
  return (
    <Router>

      <div className="app">
        <Routes>

          <Route path='/' element={<> <Header/> <Home/> </>}/>
          <Route path='/checkout' element={<> <Header/> <Checkout/> </>}/>
          <Route path='/login' element={<> <Login/> </>}/>
           
  
        </Routes>
      </div>

    </Router>
  );
}

export default App;
