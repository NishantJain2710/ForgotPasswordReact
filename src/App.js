import ForgotPasswordScreen from './Screens/ForgotPasswordScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <main>
        <Route path='/auth/fpasswd/:id/:token' component={ForgotPasswordScreen}/>
      </main>
    </Router>
);
}

export default App;
