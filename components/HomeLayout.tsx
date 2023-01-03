interface HomeLayoutProps {
  children?: any;
}
export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <h2>{children}</h2>;
};
