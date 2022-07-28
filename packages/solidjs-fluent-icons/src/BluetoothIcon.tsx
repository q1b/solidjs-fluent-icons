
import { splitProps, ComponentProps, JSX } from "solid-js";

function BluetoothIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.32 2.03A.5.5 0 009 2.5v6.33L6.8 7.1a.5.5 0 00-.6.78L8.86 10 6.2 12.1a.5.5 0 10.62.8L9 11.16v6.33a.5.5 0 00.87.33l4-4.5a.5.5 0 00-.06-.72L10.49 10l3.32-2.6a.5.5 0 00.06-.73l-4-4.5a.5.5 0 00-.55-.14zM10 10.9l2.77 2.17L10 16.18v-5.3zm0-1.78v-5.3l2.77 3.13L10 9.1z"/>
</svg>

  );
}
export default BluetoothIcon;