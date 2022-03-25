import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Main from './pages/MainPage';
import PostPage from './pages/PostPage';
import AddPostPage from './pages/AddPostPage';
import UpdatePostPage from './pages/UpdatePostPage';

const store = configureStore()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/post/:id' element={<PostPage />} />
            <Route path='/addPost' element={<AddPostPage /> } />
            <Route path='/updatePost/post/:id' element={<UpdatePostPage /> } />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
