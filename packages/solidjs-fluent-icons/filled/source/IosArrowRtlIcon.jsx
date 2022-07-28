import { splitProps } from "solid-js";
function IosArrowRtlIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.27 3.69a1 1 0 111.46-1.38l8.5 9a1 1 0 010 1.38l-8.5 9a1 1 0 11-1.46-1.38L19.12 12l-7.85-8.31z"/>
    </svg>);
}
export default IosArrowRtlIcon;
