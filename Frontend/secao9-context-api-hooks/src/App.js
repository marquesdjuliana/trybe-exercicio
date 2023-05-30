// import React, { useState } from 'react';
// import ThemeContext from './context/ThemeContext';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Image from './components/Image';
// import './style.css';

// export default function App() {
//   const [themeColor, setThemeColor] = useState('dark');

//   function toggleTheme() {
//     setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
//       <div className={`app ${themeColor}`}>
//         <Header />
//         <Image />
//       <Footer />
//       </div>
//     </ThemeContext.Provider>
//   );
// }
import React from 'react';
import ThemeProvider from './context/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './style.css';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Image />
      <Footer />
    </ThemeProvider>
  );
}
