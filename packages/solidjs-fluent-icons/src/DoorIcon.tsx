
import { splitProps, ComponentProps, JSX } from "solid-js";

function DoorIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 11a1 1 0 100-2 1 1 0 000 2zM4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 13h8a1 1 0 001-1V4a1 1 0 00-1-1H6a1 1 0 00-1 1v12a1 1 0 001 1z"/>
</svg>

  );
}
export default DoorIcon;