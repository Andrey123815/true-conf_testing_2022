export interface IAnimationStyle {
  transform: string,
  transitionDuration: string,
  transitionTimingFunction: string,
}

export const defaultAnimationStyle: IAnimationStyle = {
  transform: 'translate("0px, 0px")',
  transitionDuration: "0s",
  transitionTimingFunction: "ease-out",
};

const floorHeight: number = 201;
const elevatorSpeed: number = 1;

export const generateAnimation = (animationStyle: IAnimationStyle, floorsDiff: number) => {
  animationStyle.transform = `translate(0px,${(-floorsDiff-1) * (floorHeight)}px)`;
  animationStyle["transition-duration"] = `${Math.abs(floorsDiff) / elevatorSpeed}s`;
  animationStyle["transition-timing-function"] = "ease-out";
}
