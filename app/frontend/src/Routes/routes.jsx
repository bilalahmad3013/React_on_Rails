import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from '../Screens/Article';

export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/articles" element={<Article />} />     
      </Routes>
    </BrowserRouter>
  )
}
