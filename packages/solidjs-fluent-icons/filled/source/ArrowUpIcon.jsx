import { splitProps } from "solid-js";
function ArrowUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.2 8.73a.75.75 0 001.1 1.04l4.95-5.24v12.72a.75.75 0 001.5 0V4.52l4.95 5.25a.75.75 0 001.1-1.04l-6.08-6.41a1 1 0 00-1.45 0L3.2 8.73z"/>
    </svg>);
}
export default ArrowUpIcon;
