
import { splitProps, ComponentProps, JSX } from "solid-js";

function CalendarDataBarIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17H10v-1H5.5A1.5 1.5 0 014 14.5V7h12v2.27c.6.34 1 .99 1 1.73V5.5zM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4zm9.5 6a1 1 0 00-1 1v7a1 1 0 102 0v-7a1 1 0 00-1-1zm-3 4a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm5-1a1 1 0 112 0v5a1 1 0 11-2 0v-5z"/>
</svg>

  );
}
export default CalendarDataBarIcon;