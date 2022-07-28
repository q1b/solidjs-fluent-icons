import { splitProps } from "solid-js";
function TableStackAboveIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13zM15 17h-2v-4h4v2a2 2 0 01-2 2zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12zm-5 0V8H8v4h4zm-4 5h4v-4H8v4zM7 8v4H3V8.5c0-.28.22-.5.5-.5H7zm0 9H5a2 2 0 01-2-2v-2h4v4z"/>
    </svg>);
}
export default TableStackAboveIcon;
