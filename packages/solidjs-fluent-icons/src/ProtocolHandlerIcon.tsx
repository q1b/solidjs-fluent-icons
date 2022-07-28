
import { splitProps, ComponentProps, JSX } from "solid-js";

function ProtocolHandlerIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.59 5.41L2.4 8.6a2 2 0 000 2.82L5.6 14.6a2 2 0 002.82 0l3.18-3.18a2 2 0 000-2.82L8.4 5.4a2 2 0 00-2.82 0zM3.12 9.3L6.3 6.12a1 1 0 011.42 0l3.17 3.17a1 1 0 010 1.42L7.7 13.88a1 1 0 01-1.42 0L3.12 10.7a1 1 0 010-1.42zm8.47 5.3l-.88-.88.7-.71.88.88a1 1 0 001.42 0l3.17-3.17a1 1 0 000-1.42L13.7 6.12a1 1 0 00-1.42 0l-.88.88-.7-.7.88-.89a2 2 0 012.82 0L17.6 8.6a2 2 0 010 2.82L14.4 14.6a2 2 0 01-2.82 0z"/>
</svg>

  );
}
export default ProtocolHandlerIcon;