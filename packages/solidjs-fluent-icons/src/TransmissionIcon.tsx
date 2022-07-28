
import { splitProps, ComponentProps, JSX } from "solid-js";

function TransmissionIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a2 2 0 00-.5 3.94.5.5 0 000 .06v3.5a.5.5 0 001 0V6a.5.5 0 000-.06A2 2 0 0010 2zM9 4a1 1 0 112 0 1 1 0 01-2 0zM4 4a1 1 0 00-1 1v11a1 1 0 102 0v-4c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v4a1 1 0 102 0v-3.5c0-.28.22-.5.5-.5h5a.5.5 0 00.5-.5V5a1 1 0 10-2 0v4a.5.5 0 01-.5.5H12a.5.5 0 010-1h2V5a2 2 0 114 0v6.5c0 .83-.67 1.5-1.5 1.5H12v3a2 2 0 11-4 0v-3.5H6V16a2 2 0 11-4 0V5a2 2 0 114 0v3.5h2a.5.5 0 010 1H5.5A.5.5 0 015 9V5a1 1 0 00-1-1z"/>
</svg>

  );
}
export default TransmissionIcon;