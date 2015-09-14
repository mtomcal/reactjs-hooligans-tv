import './css';
import React, { Component } from 'react';
import NavContainer from './NavContainer';
import { RouteHandler } from 'react-router';

export default React.createClass({
    render() {
      return (
        <div>
           <NavContainer /> 
           <div>
              <RouteHandler />
           </div>
        </div>
      );
    }
});