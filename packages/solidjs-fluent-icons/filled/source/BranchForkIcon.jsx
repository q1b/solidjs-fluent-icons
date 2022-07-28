import { splitProps } from "solid-js";
function BranchForkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 5a3 3 0 01-2.5 2.96V10H12c.83 0 1.5-.67 1.5-1.5v-.54a3 3 0 111 0v.54A2.5 2.5 0 0112 11H6.5v1.04a3 3 0 11-1 0V7.96A3 3 0 119 5z"/>
    </svg>);
}
export default BranchForkIcon;
