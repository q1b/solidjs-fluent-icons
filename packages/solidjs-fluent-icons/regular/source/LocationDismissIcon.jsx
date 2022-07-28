import { splitProps } from "solid-js";
function LocationDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.95 13.96a7 7 0 10-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37 1.13-1.12zm-9.2-9.2a6 6 0 018.67 8.3l-.18.19-1.32 1.3-2.23 2.17-.09.08a1 1 0 01-1.2 0l-.1-.08-2.97-2.9-.58-.57-.17-.18a6 6 0 01.17-8.31zm1.4 1.39c.2-.2.5-.2.7 0L10 8.29l2.15-2.14a.5.5 0 01.7.7L10.71 9l2.14 2.15a.5.5 0 01-.7.7L10 9.71l-2.15 2.14a.5.5 0 01-.7-.7L9.29 9 7.15 6.85a.5.5 0 010-.7z"/>
    </svg>);
}
export default LocationDismissIcon;
