export interface AuthType {
  isLoading: boolean;
  isAuthenticated: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: null | Record<string, any>;
}
