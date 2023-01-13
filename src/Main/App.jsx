/* eslint-disable import/no-anonymous-default-export */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import {RecoilRoot} from'recoil';
import Routes from './Routes';
import { BrowserRouter} from 'react-router-dom';

export default () =>
    <RecoilRoot>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </RecoilRoot>