import { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from './use-local-storage';

export type TAuthContext = {
  user: TUser | null;
  // eslint-disable-next-line no-unused-vars
  setUser: (value: TUser | null) => void;
};

export type TUser = {
  email: string;
  token: string;
};

const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage<TUser>('user', null);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
