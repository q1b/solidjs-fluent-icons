import { splitProps } from "solid-js";
function MicIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 13a3 3 0 003-3V5a3 3 0 10-6 0v5a3 3 0 003 3zm0-1a2 2 0 01-2-2V5a2 2 0 114 0v5a2 2 0 01-2 2zM5 9.5c.28 0 .5.22.5.5a4.5 4.5 0 109 0 .5.5 0 011 0 5.5 5.5 0 01-5 5.48v2.02a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default MicIcon;
