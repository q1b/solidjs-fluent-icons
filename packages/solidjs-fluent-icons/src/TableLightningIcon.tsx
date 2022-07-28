
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableLightningIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h6a1.5 1.5 0 01-1.41-1H8v-3h2.92l.41-1H8V8h4v2.4l.2-.48c.15-.37.45-.65.8-.8V8h3v1h1V5.5zm-13 9V13h3v3H5.36A1.5 1.5 0 014 14.5zM12 7H8V4h4v3zm1-3H14.64A1.5 1.5 0 0116 5.5V7h-3V4zM4 7V5.36A1.5 1.5 0 015.5 4H7v3H4zm3 1v4H4V8h3zm5.61 8c.33 0 .56.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 00-.51-1.3h-.4a.5.5 0 01-.48-.66l.56-1.68a.5.5 0 00-.47-.66h-3.48a.5.5 0 00-.46.3l-2.08 5c-.14.34.1.7.46.7h1.11z"/>
</svg>

  );
}
export default TableLightningIcon;