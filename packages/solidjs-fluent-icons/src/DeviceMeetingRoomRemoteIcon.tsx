
import { splitProps, ComponentProps, JSX } from "solid-js";

function DeviceMeetingRoomRemoteIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.66 4.95A2.5 2.5 0 016.1 3h7.8c1.17 0 2.18.8 2.44 1.95l1.6 7A2.5 2.5 0 0115.48 15H9v-1h6.5c.96 0 1.67-.9 1.46-1.83l-1.6-7A1.5 1.5 0 0013.9 4H6.1c-.7 0-1.31.48-1.47 1.17L4.22 7H3.5c-.1 0-.21 0-.31.02l.47-2.07zM8.95 17h5.55a.5.5 0 000-1H9v.5c0 .17-.02.34-.05.5zM5 12a1 1 0 100-2 1 1 0 000 2zM2 9.5C2 8.67 2.67 8 3.5 8h3C7.33 8 8 8.67 8 9.5v7c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 012 16.5v-7zM3.5 9a.5.5 0 00-.5.5v7c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-3z"/>
</svg>

  );
}
export default DeviceMeetingRoomRemoteIcon;