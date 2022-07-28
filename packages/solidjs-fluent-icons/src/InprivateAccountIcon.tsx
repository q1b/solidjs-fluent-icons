
import { splitProps, ComponentProps, JSX } from "solid-js";

function InprivateAccountIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 6a4 4 0 017.12-2.5H10V3a3 3 0 000 6v-.5h3.12A4 4 0 016 6zm7.7 1.5H10v-1h3.97c-.04.35-.13.68-.26 1zm.27-2a3.97 3.97 0 00-.26-1H10v1h3.97zM3 13a2 2 0 012-2h10a2 2 0 011.73 1H5a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0010 17h4.52c-1.24.68-2.83 1-4.52 1a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13zm7 1v-1h7c0 .35-.04.68-.1 1H10zm6.54 1c-.18.36-.42.7-.7 1h-1.59.01H10v-1h6.54z"/>
</svg>

  );
}
export default InprivateAccountIcon;