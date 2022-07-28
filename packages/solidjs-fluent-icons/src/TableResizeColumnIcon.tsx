
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableResizeColumnIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.35 8.15c.2.2.2.5 0 .7l-.64.65h6.58l-.64-.65a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65H6.71l.64.65a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5c.2-.2.5-.2.7 0zM17 6a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6zm-4-2v3c.36 0 .72.13 1 .38V4a2 2 0 012 2v8a2 2 0 01-2 2v-3.38a1.5 1.5 0 01-1 .38v3H7v-3a1.5 1.5 0 01-1-.38V16a2 2 0 01-2-2V6c0-1.1.9-2 2-2v3.38A1.5 1.5 0 017 7V4h6z"/>
</svg>

  );
}
export default TableResizeColumnIcon;