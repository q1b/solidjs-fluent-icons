
import { splitProps, ComponentProps, JSX } from "solid-js";

function PiIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.18 4.67a2 2 0 00-.14 1.23.5.5 0 11-.98.2 3 3 0 01.23-1.9C2.66 3.5 3.38 3 4.54 3H16.5a.5.5 0 110 1H14v9.67c0 1.54.47 2.05.84 2.23.42.2 1 .09 1.43-.14a.5.5 0 11.46.9c-.56.28-1.49.53-2.32.14-.88-.41-1.41-1.42-1.41-3.13V4H8v.03a90.2 90.2 0 01-.62 6.51 44.43 44.43 0 01-.6 3.52c-.23 1.06-.5 2-.83 2.66a.5.5 0 11-.9-.44c.27-.55.53-1.39.76-2.43.22-1.03.42-2.22.58-3.44.33-2.42.53-4.92.6-6.41H4.55c-.83 0-1.18.33-1.36.67z"/>
</svg>

  );
}
export default PiIcon;