
import { splitProps, ComponentProps, JSX } from "solid-js";

function DataTreemapIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zm1 1v12H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1zm1 12v-3h8v1a2 2 0 01-2 2H8zm8-4H8V4h6a2 2 0 012 2v6z"/>
</svg>

  );
}
export default DataTreemapIcon;