import React from 'react'
import Components from './components/Components';
import * as Env from "./environments";
import Parse from "parse";

// Initialize Parse with the provided application ID and JavaScript key
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);


Parse.serverURL = Env.SERVER_URL;

// App component as the entry point of the application
export default function App() {
  return (
   
    <Components />
  )
}
