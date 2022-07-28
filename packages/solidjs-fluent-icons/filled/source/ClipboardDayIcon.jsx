import { splitProps } from "solid-js";
function ClipboardDayIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 11h4v3H8v-3zm-.91-8c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM7 7.5c0 .28.22.5.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5zM7 11v3a1 1 0 001 1h4a1 1 0 001-1v-3a1 1 0 00-1-1H8a1 1 0 00-1 1z"/>
    </svg>);
}
export default ClipboardDayIcon;
