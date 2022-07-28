import { splitProps } from "solid-js";
function TransmissionIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a2 2 0 00-.5 3.94V9.5a.5.5 0 001 0V5.94A2 2 0 0010 2zM3 5a1 1 0 012 0v4c0 .28.22.5.5.5H8a.5.5 0 000-1H6V5a2 2 0 10-4 0v11a2 2 0 104 0v-3.5h2V16a2 2 0 104 0v-3h4.5c.83 0 1.5-.67 1.5-1.5V5a2 2 0 10-4 0v3.5h-2a.5.5 0 000 1h2.5A.5.5 0 0015 9V5a1 1 0 112 0v6.5a.5.5 0 01-.5.5h-5a.5.5 0 00-.5.5V16a1 1 0 11-2 0v-4a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v4a1 1 0 11-2 0V5z"/>
    </svg>);
}
export default TransmissionIcon;
