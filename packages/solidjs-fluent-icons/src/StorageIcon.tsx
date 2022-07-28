
import { splitProps, ComponentProps, JSX } from "solid-js";

function StorageIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13 9a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zM2 8.5A2.5 2.5 0 014.5 6h11A2.5 2.5 0 0118 8.5v3a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 11.5v-3zM4.5 7C3.67 7 3 7.67 3 8.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11z"/>
</svg>

  );
}
export default StorageIcon;