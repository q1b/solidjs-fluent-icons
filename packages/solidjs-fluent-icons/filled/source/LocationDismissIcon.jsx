import { splitProps } from "solid-js";
function LocationDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.95 4.05a7 7 0 010 9.9l-1.13 1.12-2.43 2.37a2 2 0 01-2.64.12l-.14-.12-2.04-1.99-1.52-1.5a7 7 0 019.9-9.9zm-7.8 2.1a.5.5 0 000 .7L9.29 9l-2.14 2.15a.5.5 0 00.7.7L10 9.71l2.15 2.14a.5.5 0 00.7-.7L10.71 9l2.14-2.15a.5.5 0 00-.7-.7L10 8.29 7.85 6.15a.5.5 0 00-.7 0z"/>
    </svg>);
}
export default LocationDismissIcon;
