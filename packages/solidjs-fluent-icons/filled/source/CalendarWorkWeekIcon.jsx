import { splitProps } from "solid-js";
function CalendarWorkWeekIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 9V7h6v2H7zm10-3.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM6.5 6h7c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default CalendarWorkWeekIcon;
