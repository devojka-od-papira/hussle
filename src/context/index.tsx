import React, {
  FC,
  ReactNode,
  useState,
  useEffect,
  createContext,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../db';
import { ContextType } from '../types';

export const Context = createContext<ContextType | null>(null);
interface ProviderProps {
  children: ReactNode
}
const Provider:FC<ProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userUID, setUserUID] = useState<string>('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setUserUID(user.uid);
      }
    });
  }, []);

  return (
    <Context.Provider value={{
      user,
      userUID,
    }}
    >
      {children}
    </Context.Provider>
  );
};
export default Provider;
