import { splitProps } from "solid-js";
function TriangleLeftIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.07 18.76A2 2 0 0018 17V3a2 2 0 00-2.93-1.76l-13.02 7a2 2 0 000 3.52l13.02 7z"/>
    </svg>);
}
export default TriangleLeftIcon;
