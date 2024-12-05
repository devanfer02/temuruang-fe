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
import ProtectedLayout from "./components/layout/protected";

const protectedPages = [
  {
    path: '/profile',
    render: <Profile/>,
    title: 'Profile'
  }
]

const pages = [
  {
    path: '/',
    render: <Home />,
    title: 'TemuRuang'
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
          {protectedPages.map(page => (
            <Route key={page.path} path={page.path} element={
              <Layout title={page.title}>
                <ProtectedLayout>
                  {page.render}
                </ProtectedLayout>
              </Layout>
            }>
            </Route>
          ))}
        </Routes>
      </Router>
    </AuthProvider>
  )
}