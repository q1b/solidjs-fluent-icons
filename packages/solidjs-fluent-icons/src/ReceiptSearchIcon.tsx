
import { splitProps, ComponentProps, JSX } from "solid-js";

function ReceiptSearchIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 8.76V5c0-.26.05-.52.16-.76.1-.23.24-.45.42-.64A1.9 1.9 0 014.96 3h7.08c.26 0 .52.05.76.16.23.11.44.26.62.44s.33.4.42.63c.1.25.16.5.16.77v7h3v2.06c0 .39-.08.77-.23 1.12-.31.7-.88 1.27-1.58 1.58-.36.15-.74.24-1.13.24h-2.14c-.08-.2-.2-.4-.36-.56l-.44-.44H13V5a.95.95 0 00-.08-.38 1.11 1.11 0 00-.2-.32A1.01 1.01 0 0012 4H4.99a.97.97 0 00-.7.29c-.1.1-.17.2-.22.32A.86.86 0 004 5v3.26c-.35.12-.69.3-1 .5zM14.04 16c.25 0 .5-.05.74-.16.47-.2.85-.58 1.06-1.05.1-.24.16-.5.16-.75V13h-2v3h.04zm-4.8-6h1.26a.5.5 0 100-1H8.33c.36.29.67.62.92 1zM6.5 7a.5.5 0 010-1h4a.5.5 0 010 1h-4zm1.1 8.3a3.48 3.48 0 01-4.27-.06 3.5 3.5 0 114.97-.64l2.56 2.54a.5.5 0 01-.71.71L7.6 15.3zm-3.49-.72a2.5 2.5 0 102.78-4.16 2.5 2.5 0 00-2.78 4.16z"/>
</svg>

  );
}
export default ReceiptSearchIcon;