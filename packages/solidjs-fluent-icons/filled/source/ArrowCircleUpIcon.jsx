import { splitProps } from "solid-js";
function ArrowCircleUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm4.65-.85a.5.5 0 10.7.7L9.5 7.71v5.79a.5.5 0 001 0V7.7l2.15 2.15a.5.5 0 00.7-.7l-3-3a.5.5 0 00-.7 0l-3 3z"/>
    </svg>);
}
export default ArrowCircleUpIcon;
