import { splitProps } from "solid-js";
function DocumentDataIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 13.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM10 9c.28 0 .5.22.5.5v6a.5.5 0 01-1 0v-6c0-.28.22-.5.5-.5zm3 2.5a.5.5 0 00-1 0v4a.5.5 0 001 0v-4zM4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6zm5.5 4h3.3L11 3.2v3.3c0 .28.22.5.5.5z"/>
    </svg>);
}
export default DocumentDataIcon;
