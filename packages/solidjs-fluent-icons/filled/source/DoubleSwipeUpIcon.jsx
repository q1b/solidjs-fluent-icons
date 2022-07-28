import { splitProps } from "solid-js";
function DoubleSwipeUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.28 2.22a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06L5 4.56v9.69a.75.75 0 001.5 0V4.56l1.22 1.22a.75.75 0 001.06-1.06l-2.5-2.5zM2 14.25c0-1.44.81-2.69 2-3.32v1.9a2.25 2.25 0 103.5 0v-1.9A3.75 3.75 0 112 14.25zm10.5-3.32a3.75 3.75 0 103.5 0v1.9a2.25 2.25 0 11-3.5 0v-1.9zm2.28-8.71a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06l1.22-1.22v9.69a.75.75 0 001.5 0V4.56l1.22 1.22a.75.75 0 101.06-1.06l-2.5-2.5z"/>
    </svg>);
}
export default DoubleSwipeUpIcon;
