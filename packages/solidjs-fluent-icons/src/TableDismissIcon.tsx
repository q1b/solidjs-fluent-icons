
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableDismissIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.1c-.16-.32-.3-.65-.4-1H8v-3h1.2c.1-.35.24-.68.4-1H8V8h4v1.6c.32-.16.65-.3 1-.4V8h3v1.2c.35.1.68.24 1 .4V5.5zm-13 9V13h3v3H5.36A1.5 1.5 0 014 14.5zM12 4v3H8V4h4zm1 0H14.64A1.5 1.5 0 0116 5.5V7h-3V4zM7 4v3H4V5.36A1.5 1.5 0 015.5 4H7zm0 4v4H4V8h3zm12 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.8 0l1.15-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15z"/>
</svg>

  );
}
export default TableDismissIcon;