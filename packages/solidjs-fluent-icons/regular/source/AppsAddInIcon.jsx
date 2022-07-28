import { splitProps } from "solid-js";
function AppsAddInIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15 3a.5.5 0 00-1 0v2h-2a.5.5 0 000 1h2v2a.5.5 0 001 0V6h2a.5.5 0 000-1h-2V3zM4.5 17A1.5 1.5 0 013 15.5v-11C3 3.67 3.67 3 4.5 3H9c.83 0 1.5.67 1.5 1.5v5h5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-11zm6-6.5V16h5a.5.5 0 00.5-.5V11a.5.5 0 00-.5-.5h-5zm-1 5.5v-5.5H4v5a.5.5 0 00.5.5h5zm0-11.5A.5.5 0 009 4H4.5a.5.5 0 00-.5.5v5h5.5v-5z"/>
    </svg>);
}
export default AppsAddInIcon;
