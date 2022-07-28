import { splitProps } from "solid-js";
function DocumentLandscapeSplitHintIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 6a1 1 0 011-1h.5a.5.5 0 000-1H4a2 2 0 00-2 2v.5a.5.5 0 001 0V6zm1 9a1 1 0 01-1-1v-.5a.5.5 0 00-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 000-1H4zM2.5 8c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5zm4-4a.5.5 0 000 1h2a.5.5 0 000-1h-2zM6 15.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm6-7V4h-1.5a.5.5 0 00-.5.5v11c0 .28.22.5.5.5H16a2 2 0 002-2v-4h-4.5A1.5 1.5 0 0112 8.5zm1 0V4.06c.24.07.47.2.65.38l3.91 3.91c.18.18.31.4.38.65H13.5a.5.5 0 01-.5-.5z"/>
    </svg>);
}
export default DocumentLandscapeSplitHintIcon;
