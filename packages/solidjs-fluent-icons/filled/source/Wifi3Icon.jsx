import { splitProps } from "solid-js";
function Wifi3Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.95 11.84c.37.36.67.8.87 1.28a.75.75 0 01-1.37.6 2.63 2.63 0 00-4.82-.01.75.75 0 11-1.38-.6 4.13 4.13 0 016.7-1.27zm-2.03 2.04a1.24 1.24 0 11-1.76 1.76 1.24 1.24 0 011.76-1.76z"/>
    </svg>);
}
export default Wifi3Icon;
