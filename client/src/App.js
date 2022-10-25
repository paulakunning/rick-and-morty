import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    
    <div>
    <Switch>
    {/* <Route path='/' exact component={Navbar} /> */}
    <Route path='/' exact component={Home} />
    <Route path='/create' component={Form} />
   </Switch>
    </div>
    
  )
}

export default App;