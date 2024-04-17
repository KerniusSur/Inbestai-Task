import { useEffect } from "react";
import "../styles/WidgetStyles.css";
import InbestWidgetIcon1 from "../assets/inbest-widget-1.svg";
import InbestWidgetIcon2 from "../assets/inbest-widget-2.svg";

interface InbestBackgroundInteractiveWidgetProps {
  iconNumber?: number;
}

const InbestBackgroundInteractiveWidget = (
  props: InbestBackgroundInteractiveWidgetProps
) => {
  const { iconNumber = 1 } = props;

  useEffect(() => {
    const root = document.getElementById("root") as HTMLElement;
    const handleSetTranslateVariables = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      root.style.setProperty(
        "--translateX",
        -((x - width / 2) / width) * 30 + "px"
      );
      root.style.setProperty(
        "--translateY",
        -((y - height / 2) / height) * 30 + "px"
      );
    };

    window.addEventListener("mousemove", handleSetTranslateVariables);

    return () => {
      window.removeEventListener("mousemove", handleSetTranslateVariables);
    };
  }, []);

  return (
    <div id="widget-container" className="widget-container">
      <img
        className="widget-icon"
        src={(iconNumber === 1 ? InbestWidgetIcon1 : InbestWidgetIcon2) as any}
        alt="Inbest Widget"
      />
    </div>
  );
};

export default InbestBackgroundInteractiveWidget;
