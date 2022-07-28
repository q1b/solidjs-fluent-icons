import { splitProps } from "solid-js";
function FastAccelerationIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11 4a6 6 0 11-3.3 11.01V15h-.02A6 6 0 0111 4zM5.25 14c.26.36.54.7.85 1H1.5a.5.5 0 000 1h5.9a7 7 0 100-12H2.5a.5.5 0 000 1h3.6a6.98 6.98 0 00-1.43 8H3.5a.5.5 0 000 1h1.75zM8.2 7.9a3.48 3.48 0 000 4.2l1.08-1.08a2 2 0 010-2.04L8.2 7.9zm.7-.7l1.08 1.08a2 2 0 012.04 0L13.1 7.2a3.48 3.48 0 00-4.2 0zm4.9.7l-1.08 1.08a2 2 0 010 2.04l1.08 1.08a3.48 3.48 0 000-4.2zm-.7 4.9l-1.08-1.08a2 2 0 01-2.04 0L8.9 12.8a3.48 3.48 0 004.2 0zM6.5 10a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm3.5 0a1 1 0 102 0 1 1 0 00-2 0z"/>
    </svg>);
}
export default FastAccelerationIcon;
