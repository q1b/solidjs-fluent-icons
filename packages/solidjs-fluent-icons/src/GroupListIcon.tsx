
import { splitProps, ComponentProps, JSX } from "solid-js";

function GroupListIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.5 3a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h2a.5.5 0 000-1H3V4h1.5a.5.5 0 000-1h-2zm0 8a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h2a.5.5 0 000-1H3v-4h1.5a.5.5 0 000-1h-2zM6 4.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 7.5a.5.5 0 000 1h11a.5.5 0 000-1h-11zM6 7.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 7.5a.5.5 0 000 1h11a.5.5 0 000-1h-11z"/>
</svg>

  );
}
export default GroupListIcon;