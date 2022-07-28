
import { splitProps, ComponentProps, JSX } from "solid-js";

function TableMultipleIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.67 17h7.84c.95 0 1.82-.39 2.45-1.01l.02-.02A3.49 3.49 0 0017 13.5V5.67c.63.77 1 1.76 1 2.83v5a4.5 4.5 0 01-4.5 4.5h-5a4.48 4.48 0 01-2.83-1zm9.6-14.27c.47.47.73 1.1.73 1.77v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 012 13.5v-9A2.5 2.5 0 014.5 2h9c.66 0 1.3.26 1.77.73zM4.5 3h-.14A1.5 1.5 0 003 4.5V6h3V3H4.5zM11 3H7v3h4V3zm4 1.5v-.14A1.5 1.5 0 0013.5 3H12v3h3V4.5zM7 7v4h4V7H7zm8 0h-3v4h3V7zm-8 5v3h4v-3H7zm8 0h-3v3H13.64A1.5 1.5 0 0015 13.5V12zM3.5 14.61c.27.25.63.39 1 .39H6v-3H3V13.64c.04.38.22.72.5.97zM3 7v4h3V7H3z"/>
</svg>

  );
}
export default TableMultipleIcon;