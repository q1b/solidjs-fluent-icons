
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableResizeRowIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.85 7.35a.5.5 0 01-.7 0l-.65-.64v6.58l.65-.64a.5.5 0 01.7.7l-1.5 1.5a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 01.7-.7l.65.64V6.71l-.65.64a.5.5 0 11-.7-.7l1.5-1.5c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7zM14 17a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3h8zm2-4h-3c0 .36-.13.72-.38 1H16a2 2 0 01-2 2H6a2 2 0 01-2-2h3.38A1.5 1.5 0 017 13H4V7h3c0-.36.13-.72.38-1H4c0-1.1.9-2 2-2h8a2 2 0 012 2h-3.38c.25.28.38.64.38 1h3v6z"/>
</svg>

  );
}
export default TableResizeRowIcon;