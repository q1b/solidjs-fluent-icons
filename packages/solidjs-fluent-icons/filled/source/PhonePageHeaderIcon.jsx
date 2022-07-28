import { splitProps } from "solid-js";
function PhonePageHeaderIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v1H5V4zm0 2v10c0 1.1.9 2 2 2h6a2 2 0 002-2V6H5z"/>
    </svg>);
}
export default PhonePageHeaderIcon;
