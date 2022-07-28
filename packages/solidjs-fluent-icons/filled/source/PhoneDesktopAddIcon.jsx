import { splitProps } from "solid-js";
function PhoneDesktopAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5zm-.5 7.5c1.33 0 2.55-.47 3.5-1.26V11a2 2 0 01-2 2h-3v2h1.5a.5.5 0 010 1H9v-1h3v-2H9V9.5A2.5 2.5 0 006.5 7H4V4c0-1.1.9-2 2-2h4.26a5.5 5.5 0 004.24 9zm-11-3C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-7C8 8.67 7.33 8 6.5 8h-3zm.5 7.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z"/>
    </svg>);
}
export default PhoneDesktopAddIcon;
