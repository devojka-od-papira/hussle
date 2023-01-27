import React, {
  ReactNode, createContext, FC, useState, useEffect,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../db';

export const Context = createContext<any | null>(null);
interface ProviderProps {
  children: ReactNode
}
const Provider:FC<ProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userUID, setUserUID] = useState<string>('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('userContex', user?.uid);
      if (user?.uid) {
        setUserUID(user?.uid);
      }
    });
  }, []);

  return (
    <Context.Provider value={{
      currentUser,
      userUID,
    }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
