import { splitProps } from "solid-js";
function ArrowUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.13 9.16a.5.5 0 10.74.68L9.5 3.67V17.5a.5.5 0 101 0V3.67l5.63 6.17a.5.5 0 10.74-.68l-6.32-6.92a.75.75 0 00-1.1 0L3.13 9.16z"/>
    </svg>);
}
export default ArrowUpIcon;
