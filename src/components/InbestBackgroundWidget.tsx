import { Property } from "csstype";
import { CSSProperties, useEffect } from "react";
import InbestWidgetIcon1 from "../assets/inbest-widget-1.svg";
import InbestWidgetIcon2 from "../assets/inbest-widget-2.svg";
import "../styles/widgetstyles.css";
import throttle from "../utils/throttle";

interface InbestBackgroundInteractiveWidgetProps {
  iconNumber?: number;
  widgetPosition?: Extract<
    CSSProperties,
    | { left?: Property.Left<string | number> | undefined }
    | { top?: Property.Top<string | number> | undefined }
  >;
}

const InbestBackgroundWidget = (
  props: InbestBackgroundInteractiveWidgetProps
) => {
  const { iconNumber = 1, widgetPosition } = props;

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

    /**  Throttle the event listener to avoid performance issues
     *  30ms is equal arounf to 30fps
     */
    const throttledSetTranslateVariables = throttle(
      handleSetTranslateVariables,
      30
    );

    window.addEventListener("mousemove", throttledSetTranslateVariables);

    return () => {
      window.removeEventListener("mousemove", throttledSetTranslateVariables);
    };
  }, []);

  return (
    <div
      id="widget-container"
      className="widget-container"
      style={{
        left: widgetPosition?.left,
        top: widgetPosition?.top,
      }}
    >
      <img
        className="widget-icon"
        src={(iconNumber === 1 ? InbestWidgetIcon1 : InbestWidgetIcon2) as any}
        alt="Inbest Widget"
      />
    </div>
  );
};

export default InbestBackgroundWidget;
