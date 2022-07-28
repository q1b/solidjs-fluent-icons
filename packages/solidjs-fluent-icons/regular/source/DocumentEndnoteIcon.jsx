import { splitProps } from "solid-js";
function DocumentEndnoteIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2a2 2 0 00-2 2v6h1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-3v1h3a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM3.5 11a.5.5 0 010 1h-1a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h1a.5.5 0 010 1h-1A1.5 1.5 0 011 17.5v-5c0-.83.67-1.5 1.5-1.5h1zm4 7a.5.5 0 000 1h1c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 000 1h1c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-1zm-2-4c.27 0 .5.22.5.5v3a.5.5 0 11-1 0v-3c0-.28.22-.5.5-.5zm0-1a.5.5 0 100-1 .5.5 0 000 1z"/>
    </svg>);
}
export default DocumentEndnoteIcon;
