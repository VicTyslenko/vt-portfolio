// // TestingApp.test.js

// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import App from '../App'; 
// // import { scrollToTop } from '../helpers';  

// // Mock useDispatch , useSelector from react-redux
// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(),
//   useSelector: jest.fn()
// }));

// // Mock useLocation from react-router-dom
// jest.mock('react-router-dom', () => ({
//   useLocation: jest.fn(),
//   BrowserRouter: ({children}) => <div>{children}</div>
// }));

// // Mock helper fn
// jest.mock('../helpers', () => ({
//   scrollToTop: jest.fn()
// }));

// // Additionally mock store
// const mockDispatch = jest.fn();
// useDispatch.mockReturnValue(mockDispatch);
// useSelector.mockReturnValue({});
// useLocation.mockReturnValue({
//   pathname: '/'  
// });

// describe('App Component', () => {
//     it('should dispatch actions based on the route', () => {
//       // Render component
//       render(
//         <Provider store={{}}><Router><App /></Router></Provider>
//       );
  
//       // Checking dispatch
//       expect(mockDispatch).toHaveBeenCalledWith({
//         type: 'setHomeLocation',
//         payload: true
//       });
//       expect(mockDispatch).toHaveBeenCalledWith({
//         type: 'setProjectsPage',
//         payload: false
//       });
  
//       //Changing route
//       useLocation.mockReturnValue({ pathname: '/projects' });
//       // Re-render component to check changes
//       render(
//         <Provider store={{}}><Router><App /></Router></Provider>
//       );
  
//       // Checking new  dispatch
//       expect(mockDispatch).toHaveBeenCalledWith({
//         type: 'setProjectsPage',
//         payload: true
//       });
//       expect(mockDispatch).toHaveBeenCalledWith({
//         type: 'setHomeLocation',
//         payload: false
//       });
//     });
//   });
  