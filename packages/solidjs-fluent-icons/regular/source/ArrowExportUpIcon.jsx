import { splitProps } from "solid-js";
function ArrowExportUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.65 2.15c.2-.2.5-.2.7 0l4 4a.5.5 0 01-.7.7L10.5 3.71V14.5a.5.5 0 01-1 0V3.7L6.35 6.86a.5.5 0 11-.7-.7l4-4zM4 17.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"/>
    </svg>);
}
export default ArrowExportUpIcon;
