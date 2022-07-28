
import { splitProps, ComponentProps, JSX } from "solid-js";

function SquaresNestedIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zm10 4.76A2.99 2.99 0 0014 7h-4a3 3 0 00-3 3v4c0 .77.29 1.47.76 2H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v1.76zM10 16a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4z"/>
</svg>

  );
}
export default SquaresNestedIcon;