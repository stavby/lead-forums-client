interface User {
  name: string;
  native_user: GoogleUser | null;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

interface GoogleUser {
  clientId: string;
  credential: string;
}
