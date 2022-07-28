
import { splitProps, ComponentProps, JSX } from "solid-js";

function DesktopIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 2a2 2 0 00-2 2v9c0 1.1.9 2 2 2h3v2H5.5a.5.5 0 000 1h9a.5.5 0 000-1H13v-2h3a2 2 0 002-2V4a2 2 0 00-2-2H4zm8 13v2H8v-2h4zM3 4a1 1 0 011-1h12a1 1 0 011 1v9a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
</svg>

  );
}
export default DesktopIcon;