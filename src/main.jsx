import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Expenses from './routes/expences'
import Invoices from './routes/invoices'
import Invoice from './routes/invoice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='expenses' element={<Expenses />} />
        <Route pant='invoices' element={<Invoices />} >
          <Route index element={
            <div style={{padding: '1rem'}}>
              <p>Select an Invoice</p>
            </div>}
          />
          <Route path=':invoiceId' element={<Invoice />} />
        </Route>

        <Route path='*' style={{padding: '1rem'}} element={
          <div>
            <h4>There's nothing here</h4>
          </div>}
        />
        </Route>
      </Routes>
  </Router>
)
