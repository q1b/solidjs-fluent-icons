
import { splitProps, ComponentProps, JSX } from "solid-js";

function TimerIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zm7.66 1.93a.5.5 0 10-.71.7l1.41 1.42a.5.5 0 10.71-.7l-1.41-1.42zM9.5 6a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5zm0 12a7 7 0 100-14 7 7 0 000 14zm0-1a6 6 0 110-12 6 6 0 010 12z"/>
</svg>

  );
}
export default TimerIcon;