import { splitProps } from "solid-js";
function ClockPauseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 17A7.5 7.5 0 103 9.6a5.5 5.5 0 017.4 7.4h.1zM11 5.41V9h2.5a.5.5 0 01.09 1H10.5a.5.5 0 01-.5-.41V5.5a.5.5 0 011-.09zm-1 9.09a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM4 12a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4A.5.5 0 004 12zm3 0a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4A.5.5 0 007 12z"/>
    </svg>);
}
export default ClockPauseIcon;
