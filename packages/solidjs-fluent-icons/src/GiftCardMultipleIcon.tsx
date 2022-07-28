
import { splitProps, ComponentProps, JSX } from "solid-js";

function GiftCardMultipleIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.75 4A2.75 2.75 0 002 6.75v5.5A2.75 2.75 0 004.75 15h8.5A2.75 2.75 0 0016 12.25v-5.5A2.75 2.75 0 0013.25 4h-8.5zM3 12.25V10h3.3l-1.65 1.65a.5.5 0 00.7.7L7 10.71V14H4.75C3.78 14 3 13.22 3 12.25zM3 9V6.75C3 5.78 3.78 5 4.75 5H7v1.27A2 2 0 004.27 9H3zm4 0H6a1 1 0 111-1v1zm1 0V8a1 1 0 111 1H8zm3-1a2 2 0 00-3-1.73V5h5.25c.97 0 1.75.78 1.75 1.75V9h-4.27A2 2 0 0011 8zm-.65 3.65L8.71 10H15v2.25c0 .97-.78 1.75-1.75 1.75H8v-3.3l1.65 1.65a.5.5 0 00.7-.7zM6.75 17c-.85 0-1.62-.39-2.12-1h8.62A3.75 3.75 0 0017 12.25v-5.5-.12c.61.5 1 1.27 1 2.12v3.5A4.75 4.75 0 0113.25 17h-6.5z"/>
</svg>

  );
}
export default GiftCardMultipleIcon;