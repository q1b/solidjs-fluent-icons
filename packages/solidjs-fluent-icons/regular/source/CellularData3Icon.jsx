import { splitProps } from "solid-js";
function CellularData3Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 10a.5.5 0 01.5.41v5.09a.5.5 0 01-.99.09V10.5c0-.28.22-.5.5-.5zm-3 2a.5.5 0 01.5.41v3.1a.5.5 0 01-1 .08V12.5c0-.28.22-.5.5-.5zm6-4a.5.5 0 01.5.4v7.1a.5.5 0 01-1 .09V8.5c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default CellularData3Icon;
