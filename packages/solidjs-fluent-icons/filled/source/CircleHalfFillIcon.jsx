import { splitProps } from "solid-js";
function CircleHalfFillIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.54 9.25h12.92a6.5 6.5 0 00-12.92 0zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"/>
    </svg>);
}
export default CircleHalfFillIcon;
