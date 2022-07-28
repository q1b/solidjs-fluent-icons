import { splitProps } from "solid-js";
function CalligraphyPenIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2.5a.5.5 0 00-1 0v2C5 5.33 5.67 6 6.5 6h.2L5.24 9.08a2.5 2.5 0 00.1 2.33l3.47 5.91c.16.27.4.48.69.59v-7.04a1 1 0 111 0v7.03c.28-.11.52-.31.67-.58l3.47-5.9a2.5 2.5 0 00.1-2.34L13.28 6h.22c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 00-1 0v2a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2z"/>
    </svg>);
}
export default CalligraphyPenIcon;
