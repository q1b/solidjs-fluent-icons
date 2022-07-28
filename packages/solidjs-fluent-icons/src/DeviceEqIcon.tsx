
import { splitProps, ComponentProps, JSX } from "solid-js";

function DeviceEqIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2c.28 0 .5.22.5.5v15a.5.5 0 01-1 0v-15c0-.28.22-.5.5-.5zm3.5 3c.28 0 .5.22.5.5v9a.5.5 0 01-1 0v-9c0-.28.22-.5.5-.5zM7 5.5a.5.5 0 00-1 0v9a.5.5 0 001 0v-9zM16.5 8c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5zM4 8.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3z"/>
</svg>

  );
}
export default DeviceEqIcon;