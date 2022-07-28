import { splitProps } from "solid-js";
function CalendarDataBarIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 17H10v-2a2 2 0 013-1.73V11a2 2 0 114 0V7H3v7.5A2.5 2.5 0 005.5 17zm9-14A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9zm.5 7a1 1 0 00-1 1v7a1 1 0 102 0v-7a1 1 0 00-1-1zm-3 4a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm5-1a1 1 0 112 0v5a1 1 0 11-2 0v-5z"/>
    </svg>);
}
export default CalendarDataBarIcon;
