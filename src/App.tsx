import { 
  BrowserRouter as Router ,
  Routes,
  Route
} from "react-router-dom"
import Home from "./pages/home/index"
import FAQ from "./pages/faq"
import Layout from "./components/layout";
import NotFound from "./pages/notfound";
import Article from "./pages/article";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

const pages = [
  {
    path: '/',
    render: <Home/>,
    title: 'Temuruang'
  },
  {
    path: '/faq',
    render: <FAQ/>,
    title: 'FAQs'
  },
  {
    path: '/articles',
    render: <Article/>,
    title: 'Article'
  },
  {
    path: '/auth/login',
    render: <Login/>,
    title: 'Login'
  },
  {
    path: '/auth/register',
    render: <Register/>,
    title: 'Register'
  },
  {
    path: '*',
    render: <NotFound/>,
    title: 'Not Found'
  }
];

export default function App() {
  return (
    <Router>
      <Routes>
        { pages.map((page) => (
          <Route key={page.path} path={page.path} element={
            <Layout title={page.title}>
              {page.render}
            </Layout>
          }/>
        ))}
      </Routes>
    </Router>
  )
}