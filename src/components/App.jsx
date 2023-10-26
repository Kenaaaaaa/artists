import React from 'react';
import { Route ,Routes} from 'react-router-dom';
import {Artist,Artists, Profile,Work,Navbar} from './';
 import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <div>
    <CssBaseline />
    <Navbar />
        <Routes>
            <Route exact path='/' element={<Artists />}>
            
            </Route>
            <Route exact path='/artist/:id' element={<Artist />} >
            
            </Route>
            <Route exact path='/work/:id'  element={<Work />}>
           
            </Route>
            <Route exact path='/profile/:id' element={<Profile />} >
            
            </Route>
        </Routes>
    </div>
  );
}

export default App;