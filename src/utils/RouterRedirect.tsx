import { useNavigate } from "react-router-dom";

interface RouterRedirectProps {
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  tag?: string;
}

const RouterRedirect = (props: RouterRedirectProps) => {
  const { children, tag } = props;
  const navigate = useNavigate();

  if (tag === "404") {
    navigate("/404");
  }

  return children;
};

export default RouterRedirect;