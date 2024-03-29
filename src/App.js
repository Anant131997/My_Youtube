import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './components/utils/store';
import { Provider } from 'react-redux';
// import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

const appRouter = createBrowserRouter([{
  path:'/',
  element:<Body />,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<WatchPage />
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
