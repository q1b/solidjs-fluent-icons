
import { splitProps, ComponentProps, JSX } from "solid-js";

function LockClosedIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a3 3 0 013 3v1h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2V8c0-1.1.9-2 2-2h1V5a3 3 0 013-3zm4 5H6a1 1 0 00-1 1v7a1 1 0 001 1h8a1 1 0 001-1V8a1 1 0 00-1-1zm-4 3.5a1 1 0 110 2 1 1 0 010-2zM10 3a2 2 0 00-2 2v1h4V5a2 2 0 00-2-2z"/>
</svg>

  );
}
export default LockClosedIcon;