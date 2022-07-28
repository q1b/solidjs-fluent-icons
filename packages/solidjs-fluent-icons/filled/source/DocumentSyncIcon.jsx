import { splitProps } from "solid-js";
function DocumentSyncIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 004 9.2V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM1 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H6a.5.5 0 010-1h.47a1.99 1.99 0 00-2.38.34.5.5 0 01-.71-.71A3 3 0 017 12.15V12c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 014 16.85V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 010 1h-.47a1.99 1.99 0 002.38-.34.5.5 0 01.71.71 3 3 0 01-1 .66z"/>
    </svg>);
}
export default DocumentSyncIcon;
