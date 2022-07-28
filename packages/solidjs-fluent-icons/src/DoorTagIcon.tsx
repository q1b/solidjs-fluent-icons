
import { splitProps, ComponentProps, JSX } from "solid-js";

function DoorTagIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.3 6.3A1 1 0 1110 8H7a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2V7.05a4.98 4.98 0 00-8.54-3.59A2 2 0 109.3 6.3zM11.4 8.4A2 2 0 108.6 5.6a1 1 0 01-1.42-1.42A4 4 0 0114 7V16a1 1 0 01-1 1H7a1 1 0 01-1-1v-6a1 1 0 011-1h3a2 2 0 001.41-.59zM8 14a.5.5 0 000 1h4a.5.5 0 000-1H8z"/>
</svg>

  );
}
export default DoorTagIcon;