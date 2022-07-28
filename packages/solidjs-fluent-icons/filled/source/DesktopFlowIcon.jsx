import { splitProps } from "solid-js";
function DesktopFlowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 2.5c0-.18.03-.34.09-.5H3.5C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 000 1h9a.5.5 0 000-1H13v-2h3.5c.83 0 1.5-.67 1.5-1.5V7h-2.5a1.5 1.5 0 01-1.1-.47l-.25.76A2.5 2.5 0 0112 9v.51c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 016 9.5v-3C6 5.67 6.67 5 7.5 5h3c.43 0 .82.18 1.1.47l.25-.76A2.5 2.5 0 0114 3V2.5zM12 15v2H8v-2h4zm3.5-13a.5.5 0 00-.5.5V4h-.78a1.5 1.5 0 00-1.42 1.03l-.55 1.63a.5.5 0 01-.47.34H11v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5V8h.78a1.5 1.5 0 001.42-1.03l.55-1.63a.5.5 0 01.47-.34H15v.5c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z"/>
    </svg>);
}
export default DesktopFlowIcon;
