import { splitProps } from "solid-js";
function DesktopFlowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.09 2H4a2 2 0 00-2 2v9c0 1.1.9 2 2 2h3v2H5.5a.5.5 0 000 1h9a.5.5 0 000-1H13v-2h3a2 2 0 002-2V7h-1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h10v-.5c0-.18.03-.34.09-.5zM12 17H8v-2h4v2zm3-14.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V5h-.78a.5.5 0 00-.47.34l-.55 1.63A1.5 1.5 0 0111.78 8H11v1.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V7h.78a.5.5 0 00.47-.34l.55-1.63A1.5 1.5 0 0114.22 4H15V2.5zM10 7H8v2h2V7zm6-2h2V3h-2v2z"/>
    </svg>);
}
export default DesktopFlowIcon;
