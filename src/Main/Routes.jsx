/* eslint-disable import/no-anonymous-default-export */
import { Routes, Route } from "react-router-dom";
import React from "react";
import { RecoilRoot } from "recoil";

import Home from '../Pages/Home/Home';
import Publications from '../Pages/Publications/Publications';
import Apresentation from '../Pages/Apresentation/Apresentation';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Workshop from '../Pages/Workshop/Workshop';

export default () => {
  return (
    <RecoilRoot>
      <div>
        <Routes>
          <Route path="/posts" element={<Publications />} />
          <Route path="/apresentation" element={<Apresentation />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/workshop" element={<Workshop />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
};
