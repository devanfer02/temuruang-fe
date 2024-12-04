import {
  BrowserRouter as Router,
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
import DetailArticle from "./pages/article/detail";
import DetailWorkspace from "./pages/workspaces/detail";
import Profile from "./pages/users/profile";
import { AuthProvider } from "./components/context/AuthContext";

const pages = [
  {
    path: '/',
    render: <Home />,
    title: 'Temuruang'
  },
  {
    path: '/faq',
    render: <FAQ />,
    title: 'FAQs'
  },
  {
    path: '/articles',
    render: <Article />,
    title: 'Article'
  },
  {
    path: '/articles/:id',
    render: <DetailArticle />,
    title: `Article Detail`
  },
  {
    path: '/workspaces/:id',
    render: <DetailWorkspace />,
    title: `Workspace Detail`
  },
  {
    path: '/profile',
    render: <Profile />,
    title: 'Profile'
  },
  {
    path: '/auth/login',
    render: <Login />,
    title: 'Login'
  },
  {
    path: '/auth/register',
    render: <Register />,
    title: 'Register'
  },
  {
    path: '*',
    render: <NotFound />,
    title: 'Not Found'
  }
];

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={
              <Layout title={page.title}>
                {page.render}
              </Layout>
            } />
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  )
}