import { splitProps } from "solid-js";
function ScanObjectIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 4.5C3 3.67 3.67 3 4.5 3h2a.5.5 0 000-1h-2A2.5 2.5 0 002 4.5v2a.5.5 0 001 0v-2zm14 11c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 000 1h2a2.5 2.5 0 002.5-2.5v-2a.5.5 0 00-1 0v2zM15.5 3c.83 0 1.5.67 1.5 1.5v2a.5.5 0 001 0v-2A2.5 2.5 0 0015.5 2h-2a.5.5 0 000 1h2zM3 15.5c0 .83.67 1.5 1.5 1.5h2a.5.5 0 010 1h-2A2.5 2.5 0 012 15.5v-2a.5.5 0 011 0v2zm8.23-8.6a1.5 1.5 0 00-2.46 0l-2.6 3.75A1.5 1.5 0 007.42 13h5.18a1.5 1.5 0 001.23-2.35L11.23 6.9z"/>
    </svg>);
}
export default ScanObjectIcon;
