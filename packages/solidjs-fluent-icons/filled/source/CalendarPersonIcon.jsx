import { splitProps } from "solid-js";
function CalendarPersonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 7v2.4a3 3 0 00-3.73 4.6 2.5 2.5 0 00-2.23 3H5.5A2.5 2.5 0 013 14.5V7h14zm-2.5-4A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9zm3 9a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z"/>
    </svg>);
}
export default CalendarPersonIcon;
