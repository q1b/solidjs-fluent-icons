import { splitProps } from "solid-js";
function TabDesktopIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5V7H9.5A1.5 1.5 0 018 5.5V3H5.5zM9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0014.5 3H9z"/>
    </svg>);
}
export default TabDesktopIcon;
