
import { splitProps, ComponentProps, JSX } from "solid-js";

function VehicleBicycleIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 2a.5.5 0 000 1h1.59l.6 3H7V4.5a.5.5 0 00-.5-.5h-2a.5.5 0 000 1H6v1.46L5.58 9H5.5A3.5 3.5 0 109 12.67l3.97-5.3.36 1.83a3.5 3.5 0 10.98-.2L13 2.4a.5.5 0 00-.49-.4h-2zM3 12.5A2.5 2.5 0 015.41 10l-.4 2.42a.5.5 0 00.49.58h2.45A2.5 2.5 0 013 12.5zm3.09-.5l.3-1.83c.8.3 1.39.99 1.56 1.83H6.09zm.47-2.84L6.92 7H12l-3.22 4.29a3.5 3.5 0 00-2.22-2.13zm6.97 1.04l.48 2.4a.5.5 0 00.98-.2l-.48-2.4a2.5 2.5 0 11-.98.2z"/>
</svg>

  );
}
export default VehicleBicycleIcon;