export interface IAnimationStyle {
  transform: string,
  transitionDuration: string,
  transitionTimingFunction: string,
  animationFillMode: string,
}

export const defaultAnimationStyle: IAnimationStyle = {
  transform: 'translate("0px, 0px")',
  transitionDuration: "0s",
  transitionTimingFunction: "ease-out",
  animationFillMode: "forwards",
};

const floorHeight: number = 201;
const elevatorSpeed: number = 1;

export const generateAnimation = (animationStyle: IAnimationStyle, floorsDiff: number, currentFloor: number) => {
  animationStyle.transform = `translate(0px,${-(floorsDiff + currentFloor) * (floorHeight)}px)`;
  animationStyle.transitionDuration = `${Math.abs(floorsDiff) / elevatorSpeed}s`;
  animationStyle.transitionTimingFunction = "ease-out";
  animationStyle.animationFillMode = "forwards";
}
