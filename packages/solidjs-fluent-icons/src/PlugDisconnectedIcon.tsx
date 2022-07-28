
import { splitProps, ComponentProps, JSX } from "solid-js";

function PlugDisconnectedIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.85 2.15c.2.2.2.5 0 .7L16.2 4.52a4.04 4.04 0 01-.34 5.33l-.3.3-.3.31c-.42.41-1.08.41-1.5 0L9.55 6.24a1.05 1.05 0 010-1.48l.6-.61a4.04 4.04 0 015.34-.34l1.67-1.66c.2-.2.5-.2.7 0zm-2.71 2.7a3.04 3.04 0 00-4.29 0l-.3.3c-.19.2-.19.5 0 .7l3.6 3.6c.2.19.5.19.7 0l.3-.3a3.04 3.04 0 000-4.29l-.01-.01zm-5.79 3.8c.2.2.2.5 0 .7L7.71 11 9 12.3l1.65-1.65a.5.5 0 01.7.7L9.71 13l.44.45c.59.58.59 1.52 0 2.1l-.3.3a4.04 4.04 0 01-5.33.34l-1.67 1.66a.5.5 0 01-.7-.7l1.66-1.67a4.04 4.04 0 01.34-5.33l.3-.3a1.49 1.49 0 012.1 0l.45.44 1.65-1.64c.2-.2.5-.2.7 0zm-4.5 6.5a3.04 3.04 0 004.3 0l.3-.3c.19-.2.19-.5 0-.7l-3.6-3.6c-.2-.19-.5-.19-.7 0l-.3.3a3.04 3.04 0 000 4.3z"/>
</svg>

  );
}
export default PlugDisconnectedIcon;