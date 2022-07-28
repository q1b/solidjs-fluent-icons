
import { splitProps, ComponentProps, JSX } from "solid-js";

function RowTripleIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 3.5C3 2.67 3.67 2 4.5 2h11c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 4.5v-1zM4.5 3a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-11zM3 9.5C3 8.67 3.67 8 4.5 8h11c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 10.5v-1zM4.5 9a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-11zm0 5c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-11zM4 15.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-1z"/>
</svg>

  );
}
export default RowTripleIcon;