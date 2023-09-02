import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <App/>

 </BrowserRouter>
  </>
 
  
);

{/* 
<div className='container-fluid nav_bg'>
<div className="row">
    <div className="col-10 mx-auto">

    </div>
</div>
</div>
 */}