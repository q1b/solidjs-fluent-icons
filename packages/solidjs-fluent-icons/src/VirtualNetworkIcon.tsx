
import { splitProps, ComponentProps, JSX } from "solid-js";

function VirtualNetworkIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.83 6.12c.2.18.23.5.05.7L2.16 10l2.72 3.17a.5.5 0 11-.76.66l-3-3.5a.5.5 0 010-.66l3-3.5a.5.5 0 01.7-.05zm10.29 7.05a.5.5 0 00.76.66l3-3.5a.5.5 0 000-.66l-3-3.5a.5.5 0 10-.76.66L17.84 10l-2.72 3.17zM6 11a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z"/>
</svg>

  );
}
export default VirtualNetworkIcon;