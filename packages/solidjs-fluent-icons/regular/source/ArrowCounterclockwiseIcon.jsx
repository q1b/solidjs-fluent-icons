import { splitProps } from "solid-js";
function ArrowCounterclockwiseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.93 9.05A7 7 0 004.38 5.83L4.25 6H7.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 111 0v2.2a8 8 0 11-1.99 4.77.5.5 0 111 .08 7 7 0 1013.92-.5z"/>
    </svg>);
}
export default ArrowCounterclockwiseIcon;
