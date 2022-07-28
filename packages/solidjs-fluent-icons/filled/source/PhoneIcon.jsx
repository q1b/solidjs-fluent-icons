import { splitProps } from "solid-js";
function PhoneIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.5 2C5.67 2 5 2.67 5 3.5v13c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-7zM9 14h2a.5.5 0 010 1H9a.5.5 0 010-1z"/>
    </svg>);
}
export default PhoneIcon;
