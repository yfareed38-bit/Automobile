import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'EN');
  const [currency, setCurrency] = useState(localStorage.getItem('currency') || 'USD');
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  
  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const addToCompare = (vehicle) => {
    if (compareList.find(v => v.id === vehicle.id)) return;
    if (compareList.length >= 3) {
      alert('You can only compare up to 3 vehicles.');
      return;
    }
    setCompareList(prev => [...prev, vehicle]);
  };

  const removeFromCompare = (id) => {
    setCompareList(prev => prev.filter(v => v.id !== id));
  };

  const formatPrice = (priceUSD) => {
    const numericPrice = parseInt(priceUSD.replace(/[^0-9]/g, ''));
    if (currency === 'PKR') {
      return `Rs ${(numericPrice * 280).toLocaleString()}`;
    }
    return `$${numericPrice.toLocaleString()}`;
  };

  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      language, setLanguage,
      currency, setCurrency,
      wishlist, toggleWishlist,
      compareList, addToCompare, removeFromCompare,
      formatPrice
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
