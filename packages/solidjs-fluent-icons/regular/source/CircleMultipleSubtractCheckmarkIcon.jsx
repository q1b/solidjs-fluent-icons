import { splitProps } from "solid-js";
function CircleMultipleSubtractCheckmarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 2a5 5 0 014.92 4.08c.32-.05.66-.08 1-.08A6 6 0 106 12.92c0-.34.03-.68.08-1A5 5 0 017 2zM4.5 6a.5.5 0 000 1h5a.5.5 0 000-1h-5zm11.35 5.85a.5.5 0 00-.7-.7l-2.65 2.64-1.15-1.14a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3zM13 19a6 6 0 100-12 6 6 0 000 12zm0-1a5 5 0 110-10 5 5 0 010 10z"/>
    </svg>);
}
export default CircleMultipleSubtractCheckmarkIcon;
