
import { splitProps, ComponentProps, JSX } from "solid-js";

function WeatherHailDayIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11 16.67A.67.67 0 1111 18a.67.67 0 010-1.33zM8.67 16a.67.67 0 110 1.33.67.67 0 010-1.33zm4.66 0a.67.67 0 110 1.33.67.67 0 010-1.33zM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 12.24 2.82 2.82 0 0115.13 15H6.87A2.82 2.82 0 014 12.24a2.82 2.82 0 012.87-2.77h.06C7.13 7.57 8.53 6 11 6zm0 1a3.04 3.04 0 00-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0011 7zM3.8 8.7a.5.5 0 01-.22.6l-.09.04-.8.27a.5.5 0 01-.4-.9l.08-.04.8-.28a.5.5 0 01.63.31zm5.12-4.2c.33.16.62.37.87.62-.4.08-.78.21-1.13.37a2.28 2.28 0 00-3.01 3.3c-.33.1-.64.25-.93.43a3.28 3.28 0 014.2-4.72zm-6 .17L3 4.7l.76.37a.5.5 0 01-.35.93l-.09-.03-.76-.37a.5.5 0 01.36-.93zM9.99 2.3c.22.1.33.35.26.58l-.03.08-.37.77a.5.5 0 01-.93-.36l.03-.08.37-.76A.5.5 0 0110 2.3zm-3.8-.04l.05.09.27.8a.5.5 0 01-.9.4l-.04-.08-.28-.8a.5.5 0 01.9-.4z"/>
</svg>

  );
}
export default WeatherHailDayIcon;