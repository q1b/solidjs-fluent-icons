import { splitProps } from "solid-js";
function DatabaseLightningIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3zm4.69.02c.47-.24.93-.54 1.31-.9V9h-1.92c-.6 0-1.15.36-1.38.92l-2.08 5A1.5 1.5 0 0012 17h.47l-.2.78c-.7.14-1.46.22-2.27.22-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98zM13.11 16c.33 0 .57.3.49.62l-.44 1.74c-.12.48.46.83.83.49l4.87-4.55a.75.75 0 00-.51-1.3h-.4a.5.5 0 01-.48-.66l.56-1.68a.5.5 0 00-.47-.66h-3.47a.5.5 0 00-.47.3l-2.08 5c-.14.34.1.7.46.7h1.11z"/>
    </svg>);
}
export default DatabaseLightningIcon;
