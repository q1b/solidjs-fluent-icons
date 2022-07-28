
import { splitProps, ComponentProps, JSX } from "solid-js";

function ReOrderIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.5 9h11a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5h-11zm0-3h11a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5h-11z"/>
</svg>

  );
}
export default ReOrderIcon;