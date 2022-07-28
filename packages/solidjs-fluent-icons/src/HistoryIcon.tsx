
import { splitProps, ComponentProps, JSX } from "solid-js";

function HistoryIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 2h.09c.2.04.36.2.4.4l.01.1v2.2a8 8 0 11-2 4.77.5.5 0 011 .05A7 7 0 104.26 6H7l.09.01a.5.5 0 010 .99H3.4a.5.5 0 01-.4-.4L3 6.49V2.42a.5.5 0 01.41-.4L3.5 2zm6 4h.09c.2.04.36.2.4.4l.01.1V10h2.09a.5.5 0 010 1H9.41a.5.5 0 01-.4-.41L9 10.5V6.4a.5.5 0 01.41-.4h.09z"/>
</svg>

  );
}
export default HistoryIcon;