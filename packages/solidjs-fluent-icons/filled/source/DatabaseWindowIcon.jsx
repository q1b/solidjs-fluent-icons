import { splitProps } from "solid-js";
function DatabaseWindowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3zm4.69.02c.47-.24.93-.54 1.31-.9V9h-4.5A2.5 2.5 0 009 11.5v6c0 .16.01.31.04.46C6.18 17.73 4 16.5 4 15V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98zM10 11.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v.5h-9v-.5zm0 1.5h9v4.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V13z"/>
    </svg>);
}
export default DatabaseWindowIcon;
