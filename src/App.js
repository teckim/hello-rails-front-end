import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchRandomMessageAsync } from './features/message/messageSlice';
import GreetingView from './features/views/GreetingView';
import ErrorView from './features/views/ErrorView'
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <GreetingView />,
    errorElement: <ErrorView />,
  },
]);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchRandomMessage () {
      dispatch(fetchRandomMessageAsync())
    }

    fetchRandomMessage()
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
