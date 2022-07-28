import { splitProps } from "solid-js";
function DataLineIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 5.5a2.5 2.5 0 01-3.44 2.32l-1.29 1.92A2.5 2.5 0 0111.5 14a2.5 2.5 0 01-2.05-1.08L6.95 14A2.51 2.51 0 014.5 17a2.5 2.5 0 112.05-3.92L9.05 12a2.51 2.51 0 013.4-2.83l1.28-1.92A2.5 2.5 0 0115.5 3 2.5 2.5 0 0118 5.5z"/>
    </svg>);
}
export default DataLineIcon;
