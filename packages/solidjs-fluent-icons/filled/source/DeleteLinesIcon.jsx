import { splitProps } from "solid-js";
function DeleteLinesIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.5 4a1.5 1.5 0 00-3 0h3zm-4 0a2.5 2.5 0 015 0h5a.5.5 0 010 1h-1.05l-.81 7H11.5a1.5 1.5 0 00-1.12 2.5 1.5 1.5 0 000 2 1.5 1.5 0 00-.3 1.5H7.74a3 3 0 01-2.98-2.66L3.55 5H2.5a.5.5 0 010-1h5zm4 9a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6z"/>
    </svg>);
}
export default DeleteLinesIcon;
