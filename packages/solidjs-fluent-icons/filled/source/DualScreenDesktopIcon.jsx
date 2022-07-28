import { splitProps } from "solid-js";
function DualScreenDesktopIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4c0-1.1.9-2 2-2h10a2 2 0 012 2v7a2 2 0 01-2 2h-2v2h1a.5.5 0 010 1h-2v-6a3 3 0 00-3-3H4V4zm6 14H7.5V8H10a2 2 0 012 2v6a2 2 0 01-2 2zM4 8h2.5v10H4a2 2 0 01-2-2v-6c0-1.1.9-2 2-2zm5.5 7a.5.5 0 000 1h.5a.5.5 0 000-1h-.5zm-6 .5c0 .28.22.5.5.5h.5a.5.5 0 000-1H4a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default DualScreenDesktopIcon;
