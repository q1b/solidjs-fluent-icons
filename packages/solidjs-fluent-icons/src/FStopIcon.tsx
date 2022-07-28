
import { splitProps, ComponentProps, JSX } from "solid-js";

function FStopIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.88 5.35a2.83 2.83 0 013.68-2.22l.78.26a.5.5 0 10.32-.95l-.8-.26a3.83 3.83 0 00-4.96 3L9.24 9H5.5a.5.5 0 100 1h3.57l-.62 3.63a2.83 2.83 0 01-4.24 1.96l-.45-.27a.5.5 0 10-.52.86l.46.27a3.83 3.83 0 005.74-2.65l.65-3.8h3.41a.5.5 0 000-1h-3.24l.62-3.65z"/>
</svg>

  );
}
export default FStopIcon;