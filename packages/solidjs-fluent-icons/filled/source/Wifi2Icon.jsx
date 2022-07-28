import { splitProps } from "solid-js";
function Wifi2Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.59 9.45c.47.47.88 1.05 1.2 1.65a.75.75 0 01-1.34.69 4.94 4.94 0 00-8.82-.02.75.75 0 11-1.34-.67 6.44 6.44 0 0110.3-1.64zm-1.64 2.4c.37.35.67.8.87 1.27a.75.75 0 01-1.37.6 2.63 2.63 0 00-4.82-.01.75.75 0 11-1.38-.6 4.13 4.13 0 016.7-1.27zm-2.03 2.03a1.24 1.24 0 11-1.76 1.76 1.24 1.24 0 011.76-1.76z"/>
    </svg>);
}
export default Wifi2Icon;
