import { splitProps } from "solid-js";
function DataUsageSettingsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3a3 3 0 00-3 3v8a3 3 0 003 3h4.6a5.5 5.5 0 01-.4-1H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v3.02a5.5 5.5 0 011 .19V6a3 3 0 00-3-3H5zm4.02 11a5.5 5.5 0 01.48-1.8v-1.7a.5.5 0 00-1 0v3a.5.5 0 00.52.5zm3.38-4.58l.6-.21V6.5a.5.5 0 00-1 0v3.1c.13-.06.26-.13.4-.18zM5.5 8a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5a.5.5 0 00-.5-.5zm6.57 3.44a2 2 0 01-1.43 2.48l-.47.12a4.7 4.7 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z"/>
    </svg>);
}
export default DataUsageSettingsIcon;
