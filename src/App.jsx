import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  City,
  CityList,
  CountryList,
  Form,
  SpinnerFullPage
} from './components'
import { AuthProvider } from './contexts/AuthContext'
import { CitiesProvider } from './contexts/CitiesContext'

import { Suspense, lazy } from 'react'

const Homepage = lazy(() => import('./pages/Homepage/Homepage'))
const Product = lazy(() => import('./pages/Product/Product'))
const Pricing = lazy(() => import('./pages/Pricing/Pricing'))
const Login = lazy(() => import('./pages/Login/Login'))
const AppLayout = lazy(() => import('./pages/AppLayout/AppLayout'))
const PageNotFound = lazy(() => import('./pages/PageNotFound/PageNotFound'))

import { ProtectedRoute } from './pages'

export default function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}
