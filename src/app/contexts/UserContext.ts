
import { createContext, Dispatch, SetStateAction } from "react";


type User = {
  name: string;
  surname: string;
  statusUser: string;
  token: string;
  avatarUrl: string;
};

export type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);