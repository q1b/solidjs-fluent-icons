import { splitProps } from "solid-js";
function DocumentQueueIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v6.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5v-11C4 2.67 4.67 2 5.5 2H10zM6.5 5a.5.5 0 000 1h2a.5.5 0 000-1h-2zM6 7.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zM6.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2zM11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-1a.5.5 0 011 0v1a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 012 14.5v-1c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default DocumentQueueIcon;
