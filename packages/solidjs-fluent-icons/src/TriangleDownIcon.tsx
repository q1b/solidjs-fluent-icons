
import { splitProps, ComponentProps, JSX } from "solid-js";

function TriangleDownIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.88 4.46A1 1 0 0017 3H3a1 1 0 00-.88 1.46l7 13.02a1 1 0 001.76 0l7-13.02zM17 2a2 2 0 011.76 2.93l-7 13.02a2 2 0 01-3.52 0l-7-13.02A2 2 0 013 2h14z"/>
</svg>

  );
}
export default TriangleDownIcon;