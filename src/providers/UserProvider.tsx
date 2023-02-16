import React, { createContext, ReactNode, useMemo, useState } from 'react';
import { User, UserState } from '../types';

export const UserContext = createContext<UserState>({ user: null, setUser: (user: User | null) => {} });

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
