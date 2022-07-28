
import { splitProps, ComponentProps, JSX } from "solid-js";

function CircleHalfFillIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 016.98 6.5H3.02A7 7 0 0110 3z"/>
</svg>

  );
}
export default CircleHalfFillIcon;