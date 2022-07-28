import { splitProps } from "solid-js";
function ScanIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.91 5.19a6.98 6.98 0 015.65-2.17L7.4 8.5c-.1.18-.19.36-.25.56L4.91 5.2zm-.67.83l3.12 5.4a3 3 0 00.4.58H3.3a7 7 0 01.95-5.98zM8.27 11l-.04-.06A2 2 0 0111.73 9l.04.06A2 2 0 018.27 11zm1.12-3.94l2.23-3.87c2.08.5 3.8 1.92 4.7 3.81H10c-.21 0-.42.02-.61.06zm2.85.94h4.47a7 7 0 01-.95 5.98l-3.12-5.4c-.1-.2-.25-.4-.4-.58zm.61 2.94l2.24 3.87a6.98 6.98 0 01-5.65 2.17l3.16-5.48c.1-.18.19-.36.25-.56zm-2.24 2L8.38 16.8A7.01 7.01 0 013.68 13H10c.21 0 .42-.02.61-.06zM10 2a8 8 0 100 16 8 8 0 000-16z"/>
    </svg>);
}
export default ScanIcon;
