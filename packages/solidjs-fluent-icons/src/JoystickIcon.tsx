
import { splitProps, ComponentProps, JSX } from "solid-js";

function JoystickIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 3a2 2 0 110 4 2 2 0 010-4zm.5 4.96a3 3 0 10-1 0V11h-2c-.83 0-1.5.67-1.5 1.5v.5H5a2 2 0 00-2 2v2.5c0 .28.22.5.5.5h13a.5.5 0 00.5-.5V15a2 2 0 00-2-2h-1v-.5c0-.83-.67-1.5-1.5-1.5h-2V7.96zM7.5 12h5c.28 0 .5.22.5.5v.5H7v-.5c0-.28.22-.5.5-.5zM5 14h10a1 1 0 011 1v2H4v-2a1 1 0 011-1z"/>
</svg>

  );
}
export default JoystickIcon;