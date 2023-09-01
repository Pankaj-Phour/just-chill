import React from 'react';
import { EventEmitter } from './apiService';

export const Contact = () => {
  EventEmitter.subscribe('navChange',(event)=> {
    console.log("Hello from Nav change event",event);
  })
  return (
    <div>
        Welcome to contact us page.
    </div>
  )
}
