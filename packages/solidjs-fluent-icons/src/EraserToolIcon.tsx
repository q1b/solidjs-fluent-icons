
import { splitProps, ComponentProps, JSX } from "solid-js";

function EraserToolIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 2c.28 0 .5.22.5.5V6h12V2.5a.5.5 0 011 0v12a3.5 3.5 0 01-3.5 3.5h-7A3.5 3.5 0 013 14.5v-12c0-.28.22-.5.5-.5zm.5 9v3.5A2.5 2.5 0 006.5 17h7a2.5 2.5 0 002.5-2.5V11H4zm12-1V7H4v3h12z"/>
</svg>

  );
}
export default EraserToolIcon;