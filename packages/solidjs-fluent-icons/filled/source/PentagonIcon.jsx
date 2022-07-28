import { splitProps } from "solid-js";
function PentagonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.76 1.66a2.5 2.5 0 00-3.37-.01L2.82 6.7a2.5 2.5 0 00-.67 2.7l2.15 5.95A2.5 2.5 0 006.65 17h6.83a2.5 2.5 0 002.36-1.7l2.03-6.02a2.5 2.5 0 00-.68-2.64l-5.43-4.98z"/>
    </svg>);
}
export default PentagonIcon;
