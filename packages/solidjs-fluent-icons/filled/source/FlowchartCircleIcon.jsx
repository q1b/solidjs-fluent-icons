import { splitProps } from "solid-js";
function FlowchartCircleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm4-3.5v2c0 .28.22.5.5.5H7v1.8l-1.35 1.35a.5.5 0 000 .7l1.5 1.5c.2.2.5.2.7 0L9.21 13H11v.5c0 .28.22.5.5.5h2a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v.5H9.2L8 10.8V9h.5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default FlowchartCircleIcon;
