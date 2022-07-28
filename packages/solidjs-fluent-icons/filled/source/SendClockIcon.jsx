import { splitProps } from "solid-js";
function SendClockIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.72 1.05l15.36 7.57a.5.5 0 010 .9l-.66.32a5.5 5.5 0 00-8.4 4.14l-6.3 3.1a.5.5 0 01-.7-.58l1.52-5.74a.5.5 0 01.4-.37l6.88-1.14a.25.25 0 00.19-.15l.02-.06a.25.25 0 00-.15-.27l-.06-.02L3.9 7.6a.5.5 0 01-.4-.37l-1.48-5.6a.5.5 0 01.7-.58zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z"/>
    </svg>);
}
export default SendClockIcon;
