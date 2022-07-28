
import { splitProps, ComponentProps, JSX } from "solid-js";

function LocationIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13 9a3 3 0 11-6 0 3 3 0 016 0zm-1 0a2 2 0 10-4 0 2 2 0 004 0zm2.95 4.96a7 7 0 10-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37 1.13-1.12zm-9.2-9.2a6 6 0 018.67 8.3l-.18.19-1.32 1.3-2.23 2.17-.09.08a1 1 0 01-1.2 0l-.1-.08-2.97-2.9-.58-.57-.17-.18a6 6 0 01.17-8.31z"/>
</svg>

  );
}
export default LocationIcon;