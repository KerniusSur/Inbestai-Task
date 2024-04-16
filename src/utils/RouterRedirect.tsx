import { Navigate } from "react-router-dom";

interface RouterRedirectProps {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  tag?: string;
}

const RouterRedirect = (props: RouterRedirectProps) => {
  const { children, tag } = props;

  if (tag === "404") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RouterRedirect;
