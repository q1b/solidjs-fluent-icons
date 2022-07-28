import { splitProps } from "solid-js";
function GanttChartIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4zM9 9.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm3.5 1.5a.5.5 0 000 1h3a.5.5 0 000-1h-3zm-8-7A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-11zM3 6.5C3 5.67 3.67 5 4.5 5H7v1h1V5h4v3h1V5h2.5c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H13v-2h-1v2H8V9H7v6H4.5A1.5 1.5 0 013 13.5v-7z"/>
    </svg>);
}
export default GanttChartIcon;
