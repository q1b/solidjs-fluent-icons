import { splitProps } from "solid-js";
function WindowDevToolsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.75 2A2.75 2.75 0 002 4.75v8.5A2.75 2.75 0 004.75 16h5.88l.12-.24.73-1.26H4.75c-.7 0-1.25-.56-1.25-1.25V6h11v1.15c.46-.25.97-.4 1.5-.44V4.75A2.75 2.75 0 0013.25 2h-8.5zm9.27 10.1a2.78 2.78 0 012.77-4.35l-1.31 2.27a.93.93 0 001.6.92l1.32-2.27a2.78 2.78 0 01-2.37 4.58l-2.4 4.17a1.16 1.16 0 01-2.01-1.16l2.4-4.16zm-1.46-.95c-.12-.69-.06-1.4.22-2.08l-1.93-1.92a.5.5 0 00-.7.7L12.29 10l-2.14 2.15a.5.5 0 00.7.7l1.71-1.7zm-4.2-4c.19.2.19.5 0 .7L6.2 10l2.14 2.15a.5.5 0 01-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5c.2-.2.5-.2.7 0z"/>
    </svg>);
}
export default WindowDevToolsIcon;
