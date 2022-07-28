import { splitProps } from "solid-js";
function CalendarAgendaIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 14.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zm-3-8a.5.5 0 00-.41-.5H6.41a.5.5 0 000 1h7.18a.5.5 0 00.41-.5zm0 3.5a.5.5 0 00-.41-.5H6.41a.5.5 0 000 1h7.18A.5.5 0 0014 10zm0 3.5a.5.5 0 00-.41-.5H6.41a.5.5 0 000 1h7.18a.5.5 0 00.41-.5z"/>
    </svg>);
}
export default CalendarAgendaIcon;
