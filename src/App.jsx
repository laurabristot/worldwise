import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { City, CityList, CountryList, Form } from './components'
import { CitiesProvider } from './contexts/CitiesContext'
import {
  AppLayout,
  Homepage,
  Login,
  PageNotFound,
  Pricing,
  Product
} from './pages'

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  )
}
