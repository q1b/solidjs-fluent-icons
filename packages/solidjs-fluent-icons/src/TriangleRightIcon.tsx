
import { splitProps, ComponentProps, JSX } from "solid-js";

function TriangleRightIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.46 2.12A1 1 0 003 3v14a1 1 0 001.46.88l13.02-7a1 1 0 000-1.76l-13.02-7zM2 3a2 2 0 012.93-1.76l13.02 7a2 2 0 010 3.52l-13.02 7A2 2 0 012 16.99V3z"/>
</svg>

  );
}
export default TriangleRightIcon;