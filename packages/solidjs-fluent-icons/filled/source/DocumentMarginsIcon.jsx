import { splitProps } from "solid-js";
function DocumentMarginsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2v-3.5a.5.5 0 011 0V18h6v-3.5a.5.5 0 011 0V18a2 2 0 002-2V4a2 2 0 00-2-2v3.5a.5.5 0 01-1 0V2H7v3.5a.5.5 0 01-1 0V2zm.5 11a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zm7 0a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5z"/>
    </svg>);
}
export default DocumentMarginsIcon;
