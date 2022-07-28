import { splitProps } from "solid-js";
function DataHistogramIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12 4.5c0-.83-.67-1.5-1.5-1.5h-1C8.67 3 8 3.67 8 4.5V17h4V4.5zM13 6v11h3.5a.5.5 0 00.5-.5V8a2 2 0 00-2-2h-2zM5 9h2v8H3.5a.5.5 0 01-.5-.5V11c0-1.1.9-2 2-2z"/>
    </svg>);
}
export default DataHistogramIcon;
