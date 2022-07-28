import { splitProps } from "solid-js";
function EraserSegmentIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.32 2.44a1.5 1.5 0 00-2.12 0L2.44 11.2a1.5 1.5 0 000 2.12l4.24 4.24c.31.32.73.46 1.14.44h6.27a1.5 1.5 0 100-1H9.36l8.2-8.2a1.5 1.5 0 000-2.12l-4.24-4.24zm-8.49 7.78l4.95 4.95-1.69 1.69a.5.5 0 01-.7 0L3.14 12.6a.5.5 0 010-.7l1.7-1.7z"/>
    </svg>);
}
export default EraserSegmentIcon;
