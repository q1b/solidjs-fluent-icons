
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextPositionFrontIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13zm3 8h1v2.5a.5.5 0 01-1 0V11zm7 0h-1v2.5a.5.5 0 001 0V11zm3-2a.5.5 0 010 1h-13a.5.5 0 010-1h13zM10 5a3.5 3.5 0 013.46 3h-1.01a2.5 2.5 0 00-4.9 0H6.54c.24-1.7 1.7-3 3.46-3zM3.5 15a.5.5 0 000 1h13a.5.5 0 000-1h-13z"/>
</svg>

  );
}
export default TextPositionFrontIcon;