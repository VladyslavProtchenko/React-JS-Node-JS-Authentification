import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Template from './pages/Template';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Template/>}>
    <Route index element={<Home/>}/>
    <Route path='registration' element={<Registration/>}/>
    <Route path='login' element={<Login/>}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;