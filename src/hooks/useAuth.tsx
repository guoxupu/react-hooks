import { useContext, createContext } from 'react';
import { getAuthorButtons, login as postLogin } from '@/domain/user/services';
import { USER } from '@/domain/user/constant';

export interface IAuthContext {
  // eslint-disable-next-line no-unused-vars
  token?: string;
  // eslint-disable-next-line no-unused-vars
  login: (params: API.ReqLoginForm) => Promise<API.ResLogin>;
  loginPath: string;
  getButtonAuths: () => Promise<API.ResAuthButtons>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export default function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return context!;
}

export function useProvideAuth(): IAuthContext {
  // const navigate = useNavigate();
  // const [token, setUser] = useLocalStorageState<string>(USER, {
  //   defaultValue: '',
  // });

  const loginPath = '/login';

  const login = async (params: API.ReqLoginForm) => {
    const result = await postLogin(params);
    if (result) {
      localStorage.setItem(USER, result.access_token);
      return result;
    }
    return result;
  };

  const getButtonAuths = async () => {
    const result = await getAuthorButtons();
    return result.data;
  };

  const token = localStorage.getItem(USER) || '';

  // const logout = async () => {
  //   const result = await postUserLogout();
  //   if (result) {
  //     sessionStorage.clear();
  //     location.href = '/user/login';
  //     setUser(null);
  //   }
  //   return result;
  // };

  return {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    login,
    token,
    loginPath,
    getButtonAuths,
  };
}

export interface AuthProviderProps {
  children?: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const value = useProvideAuth();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
