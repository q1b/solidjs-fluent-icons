
import { splitProps, ComponentProps, JSX } from "solid-js";

function InsertIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a1 1 0 00-1 1v2a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1H6zM4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 13a1 1 0 01-1-1v-2a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H6zm-2-1c0 1.1.9 2 2 2h8a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2zm-2-6c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15A.5.5 0 012 10z"/>
</svg>

  );
}
export default InsertIcon;