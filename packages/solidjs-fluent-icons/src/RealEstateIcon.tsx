
import { splitProps, ComponentProps, JSX } from "solid-js";

function RealEstateIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 2C2.67 2 2 2.67 2 3.5v13.75c0 .41.34.75.75.75h1.5c.41 0 .75-.34.75-.75v-2.01c.53.47 1.23.76 2 .76h7a3 3 0 003-3V6v-.08A1.5 1.5 0 0016.5 3H4.91c-.2-.58-.76-1-1.41-1zM16 6v7a2 2 0 01-2 2H7a2 2 0 01-2-2V6h11zm.5-1H4v12H3V3.5a.5.5 0 011 0V4h12.5a.5.5 0 010 1zm-9 5.45V13c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-1c0-.27.22-.5.5-.5h1c.28 0 .5.23.5.5v1c0 .28.22.5.5.5h1a.5.5 0 00.5-.5v-2.55a1 1 0 00-.34-.74l-2.33-2.08a.5.5 0 00-.66 0L7.84 9.71a1 1 0 00-.34.74z"/>
</svg>

  );
}
export default RealEstateIcon;