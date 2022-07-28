
import { splitProps, ComponentProps, JSX } from "solid-js";

function SquareShadowIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14H6v1.5A2.5 2.5 0 008.5 18h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 6H14V4.5A2.5 2.5 0 0011.5 2h-7zM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5v-7z"/>
</svg>

  );
}
export default SquareShadowIcon;