
import { splitProps, ComponentProps, JSX } from "solid-js";

function CalendarChatIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 16h3.7c.08.27.18.52.29.77l-.07.23H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1c-.32-.16-.65-.3-1-.4V7H4v7.5c0 .83.67 1.5 1.5 1.5zm0-12C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5h-9zm5.06 12.68l-.54 1.8c-.1.3.2.6.5.5l1.8-.54a4.5 4.5 0 10-1.76-1.75zM12.5 16a.5.5 0 010-1h2a.5.5 0 110 1h-2zm0-3h4a.5.5 0 110 1h-4a.5.5 0 010-1z"/>
</svg>

  );
}
export default CalendarChatIcon;