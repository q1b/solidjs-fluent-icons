import { splitProps } from "solid-js";
function TableInsertColumnIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 3.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zm13 0a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zM9 3a2 2 0 00-2 2v2h6V5a2 2 0 00-2-2H9zm-2 9V8h6v4H7zm0 1h6v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2z"/>
    </svg>);
}
export default TableInsertColumnIcon;
