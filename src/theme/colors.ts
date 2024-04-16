export interface CustomColor {
  [key: string]: string;
}

export const colors: CustomColor = {
  white: "#FFFFFF",
  black: "#000000",
  gallery: "EEEEEE",
  yellow: "#F7DB00",
};

export const elevation = {
  elevation1: "0px 0px 10px 0px rgba(0,0,0,0.5)",
};

export const animations = {
  eaelSlide05: "eael-slide-in-up .5s linear",
};

export const transitions = {
  headerTransition:
    "background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s",
};
