import { splitProps } from "solid-js";
function Wifi1Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.73 7.56c.4.4.78.87 1.11 1.35a.75.75 0 01-1.23.85 7.97 7.97 0 00-13.14 0 .75.75 0 11-1.23-.86 9.47 9.47 0 0114.5-1.34zm-2.14 1.9c.47.46.88 1.04 1.2 1.64a.75.75 0 11-1.34.69 4.94 4.94 0 00-8.82-.02.75.75 0 01-1.34-.67 6.44 6.44 0 0110.3-1.64zm-1.64 2.38c.37.36.67.8.87 1.28a.75.75 0 01-1.37.6 2.63 2.63 0 00-4.82-.01.75.75 0 11-1.38-.6 4.13 4.13 0 016.7-1.27zm-2.03 2.04a1.24 1.24 0 11-1.76 1.76 1.24 1.24 0 011.76-1.76z"/>
    </svg>);
}
export default Wifi1Icon;
