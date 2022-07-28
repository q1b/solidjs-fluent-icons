
import { splitProps, ComponentProps, JSX } from "solid-js";

function DataAreaIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 2.5a.5.5 0 10-1 0v15c0 .28.22.5.5.5h15a.5.5 0 100-1H16V5.5a.5.5 0 00-.81-.39L10.45 8.9l-3.2-1.83a.5.5 0 00-.45-.03L3 8.74V2.5zm0 7.32l3.97-1.76 3.28 1.87c.18.1.4.09.56-.04L15 6.54V17H3V9.82z"/>
</svg>

  );
}
export default DataAreaIcon;