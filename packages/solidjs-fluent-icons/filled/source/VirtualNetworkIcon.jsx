import { splitProps } from "solid-js";
function VirtualNetworkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.7 6.16c.34.25.4.72.14 1.05L2.7 10l2.14 2.8a.75.75 0 11-1.18.9l-2.5-3.24a.75.75 0 010-.92l2.5-3.25a.75.75 0 011.05-.13zm10.46 6.63a.75.75 0 101.18.92l2.5-3.25c.21-.27.21-.65 0-.92l-2.5-3.25a.75.75 0 10-1.18.92L17.3 10l-2.14 2.8zM6 11a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2z"/>
    </svg>);
}
export default VirtualNetworkIcon;
