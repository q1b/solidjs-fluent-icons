import { splitProps } from "solid-js";
function Person5Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 6a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6zM3 13a2 2 0 012-2h7.59l-.07.25-.12.75H5a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0010 17c.78 0 1.51-.07 2.18-.21a1.5 1.5 0 00-.14 1.04c-.65.11-1.34.17-2.04.17a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13zm11-2a.5.5 0 00-.5.42l-.5 3a.5.5 0 00.57.58l.08-.02.21-.02a130.74 130.74 0 011.74-.2l.02-.01a1.63 1.63 0 010 3.25c-.3 0-.66-.08-1-.23a1.6 1.6 0 01-.7-.54.5.5 0 00-.84.54c.26.41.7.71 1.13.91.45.2.96.32 1.41.32a2.63 2.63 0 10-.48-5.2 59.76 59.76 0 00-1.04.12l.32-1.92h3.08a.5.5 0 000-1H14z"/>
    </svg>);
}
export default Person5Icon;
