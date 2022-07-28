
import { splitProps, ComponentProps, JSX } from "solid-js";

function ResizeTableIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a3 3 0 00-3 3v2.35c.29-.32.62-.6 1-.81V5c0-1.1.9-2 2-2h3.5a.5.5 0 000-1H5zm10 16h-2.35c.32-.29.6-.62.81-1H15a2 2 0 002-2v-3.5a.5.5 0 011 0V15a3 3 0 01-3 3zM11.5 2a.5.5 0 000 1H15a2 2 0 012 2v3.5a.5.5 0 001 0V5a3 3 0 00-3-3h-3.5zM5 7a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3v-5a3 3 0 00-3-3H5zm-2 3c0-1.1.9-2 2-2v2H3zm3 0V8h3v2H6zm4 0V8a2 2 0 012 2h-2zm-4 1h3v3H6v-3zm4 0h2v3h-2v-3zm-4 4h3v2H6v-2zm6 0a2 2 0 01-2 2v-2h2zm-9-4h2v3H3v-3zm0 4h2v2a2 2 0 01-2-2z"/>
</svg>

  );
}
export default ResizeTableIcon;