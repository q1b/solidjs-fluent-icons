import { splitProps } from "solid-js";
function CalendarLtrIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 3A2.5 2.5 0 003 5.5V6h14v-.5A2.5 2.5 0 0014.5 3h-9zM17 7H3v7.5A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5V7zm-9 3a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 110-2 1 1 0 010 2zm4-4a1 1 0 11-2 0 1 1 0 012 0zm-1 4a1 1 0 110-2 1 1 0 010 2zm4-4a1 1 0 11-2 0 1 1 0 012 0z"/>
    </svg>);
}
export default CalendarLtrIcon;
