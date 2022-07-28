import { splitProps } from "solid-js";
function LocationAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.5 8.5c0-.28.22-.5.5-.5h2.5V5.5a.5.5 0 011 0V8H13a.5.5 0 010 1h-2.5v2.5a.5.5 0 01-1 0V9H7a.5.5 0 01-.5-.5zm8.45 5.46a7 7 0 10-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37 1.13-1.12zm-9.2-9.2a6 6 0 018.67 8.3l-.18.19-1.32 1.3-2.23 2.17-.09.08a1 1 0 01-1.2 0l-.1-.08-2.97-2.9-.58-.57-.17-.18a6 6 0 01.17-8.31z"/>
    </svg>);
}
export default LocationAddIcon;
