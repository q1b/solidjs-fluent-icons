import { splitProps } from "solid-js";
function CalendarMentionIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 7v3.42A4.98 4.98 0 0010 15c0 .71.15 1.39.42 2H5.5A2.5 2.5 0 013 14.5V7h14zm-2.5-4A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9zm.5 9a3 3 0 101.28 5.71.5.5 0 11.44.9A4 4 0 1119 15v.51a1.5 1.5 0 01-2.65.97A2 2 0 0113 15a2 2 0 013.17-1.62.5.5 0 01.83.37v1.75a.5.5 0 101 0V15a3 3 0 00-3-3zm-1 3a1 1 0 102 0 1 1 0 00-2 0z"/>
    </svg>);
}
export default CalendarMentionIcon;
