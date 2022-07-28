import { splitProps } from "solid-js";
function SwipeUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.53 2.22a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06l1.22-1.22v9.69a.75.75 0 001.5 0V4.56l1.22 1.22a.75.75 0 101.06-1.06l-2.5-2.5zM6 14a4 4 0 012.25-3.6v1.16a3 3 0 103.5 0V10.4A4 4 0 116 14z"/>
    </svg>);
}
export default SwipeUpIcon;
