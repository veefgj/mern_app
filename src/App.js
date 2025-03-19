import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaulComponent from './components/DefaulComponent/DefaulComponent'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page
            const Layout = route.isShowHeader ? DefaulComponent : Fragment 
            return (
              <Route key={route.path} path={route.path} element={
                <Layout>
                  <Page />

                </Layout>
              } />
            )
          })}

        </Routes>
      </Router>
    </div>
  )
}
export default App