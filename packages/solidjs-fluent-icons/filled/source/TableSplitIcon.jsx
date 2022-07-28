import { splitProps } from "solid-js";
function TableSplitIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 6h4V2H8v4zM7 2H3.5a.5.5 0 00-.5.5V4c0 1.1.9 2 2 2h2V2zm6 4h2a2 2 0 002-2V2.5a.5.5 0 00-.5-.5H13v4zm4 11.5a.5.5 0 01-.5.5H13v-4h2a2 2 0 012 2v1.5zM12 14v4H8v-4h4zm-8.5 4H7v-4H5a2 2 0 00-2 2v1.5c0 .28.22.5.5.5zm-1-8.5h15a.5.5 0 110 1h-15a.5.5 0 010-1z"/>
    </svg>);
}
export default TableSplitIcon;
