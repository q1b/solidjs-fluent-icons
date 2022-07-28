import { splitProps } from "solid-js";
function GridKanbanIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 2a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1H3zm0 6a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V9a1 1 0 00-1-1H3zm0 6a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1v-2a1 1 0 00-1-1H3zm9-12a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1h-5zm0 6a1 1 0 00-1 1v2a1 1 0 001 1h5a1 1 0 001-1V9a1 1 0 00-1-1h-5z"/>
    </svg>);
}
export default GridKanbanIcon;
