
import { splitProps, ComponentProps, JSX } from "solid-js";

function BookPulseIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 16V4c0-1.1.9-2 2-2h8a2 2 0 012 2v11a1 1 0 01-1 1H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2zM15 4a1 1 0 00-1-1H6a1 1 0 00-1 1v11h10V4zM9.46 6.3a.5.5 0 00-.9-.02L7.18 9H6.5a.5.5 0 000 1h1a.5.5 0 00.45-.28l1.03-2.06 2.06 4.55a.5.5 0 00.89.05L13.28 10h.22a.5.5 0 000-1H13a.5.5 0 00-.43.24l-1 1.69-2.11-4.64z"/>
</svg>

  );
}
export default BookPulseIcon;