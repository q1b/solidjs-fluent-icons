import { splitProps } from "solid-js";
function DocumentLandscapeDataIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-11zM9 7a1 1 0 012 0v6a1 1 0 11-2 0V7zm5 1a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zm-9 3a1 1 0 112 0v2a1 1 0 11-2 0v-2z"/>
    </svg>);
}
export default DocumentLandscapeDataIcon;
