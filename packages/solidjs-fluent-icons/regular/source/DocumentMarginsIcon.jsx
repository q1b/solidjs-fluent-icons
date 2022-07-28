import { splitProps } from "solid-js";
function DocumentMarginsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.5 13a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zm7 0a.5.5 0 01-.5-.5v-5a.5.5 0 011 0v5a.5.5 0 01-.5.5zM4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3-1v2.5a.5.5 0 01-1 0V3a1 1 0 00-1 1v12a1 1 0 001 1v-2.5a.5.5 0 011 0V17h6v-2.5a.5.5 0 011 0V17a1 1 0 001-1V4a1 1 0 00-1-1v2.5a.5.5 0 01-1 0V3H7z"/>
    </svg>);
}
export default DocumentMarginsIcon;
