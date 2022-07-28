import { splitProps } from "solid-js";
function TableMoveAboveIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM3.5 8h3.88a1.52 1.52 0 00.62.41V12h4V8.41a1.5 1.5 0 00.62-.41h3.88c.28 0 .5.22.5.5V15a2 2 0 01-2 2H5a2 2 0 01-2-2V8.5c0-.28.22-.5.5-.5zm.5 5v2a1 1 0 001 1h2v-3H4zm8 3v-3H8v3h4zm1 0h2a1 1 0 001-1v-2h-3v3zm0-4h3V9h-3v3zM4 9v3h3V9H4zm7.15-1.65a.5.5 0 00.7-.7l-1.5-1.5a.5.5 0 00-.7 0l-1.5 1.5a.5.5 0 10.7.7l.65-.64V9.5a.5.5 0 001 0V6.7l.65.65z"/>
    </svg>);
}
export default TableMoveAboveIcon;
