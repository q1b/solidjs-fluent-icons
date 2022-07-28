
import { splitProps, ComponentProps, JSX } from "solid-js";

function ScratchpadIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5H12v-.7a5.46 5.46 0 01-.8-.3H4.5a.5.5 0 01-.5-.5v-13c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v1.88c.4.32.75.72 1 1.18V3.5c0-.83-.67-1.5-1.5-1.5h-11zM8 11.5c0-.18.03-.34.09-.5H6.5a.5.5 0 000 1H8v-.5zm-1.5-3h3v1h-3a.5.5 0 010-1zM9.8 7a4 4 0 01.58-1H6.5a.5.5 0 000 1h3.3zm3.7-1.5a3 3 0 00-3 3v3a3 3 0 106 0v-3a3 3 0 00-3-3zm-2 3a2 2 0 114 0v3a2 2 0 11-4 0v-3zm-1.5 3a.5.5 0 00-1 0v.5a4.5 4.5 0 004 4.47V18a.5.5 0 001 0v-1.53A4.5 4.5 0 0018 12v-.5a.5.5 0 00-1 0v.5a3.5 3.5 0 11-7 0v-.5z"/>
</svg>

  );
}
export default ScratchpadIcon;