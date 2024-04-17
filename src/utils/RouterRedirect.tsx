import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RouterRedirectProps {
  children: ReactNode;
  tag?: string;
}

const RouterRedirect = (props: RouterRedirectProps) => {
  const { children, tag } = props;

  if (tag === "404") {
    return <Navigate to="/404" />;
  }

  return children;
};

export default RouterRedirect;
