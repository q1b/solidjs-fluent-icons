
import { splitProps, ComponentProps, JSX } from "solid-js";

function OvalIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 10a6 6 0 016-6h4a6 6 0 010 12H8a6 6 0 01-6-6zm6-5a5 5 0 000 10h4a5 5 0 000-10H8z"/>
</svg>

  );
}
export default OvalIcon;