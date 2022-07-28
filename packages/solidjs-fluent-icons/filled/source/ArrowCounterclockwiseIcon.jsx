import { splitProps } from "solid-js";
function ArrowCounterclockwiseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.37 2.03A8 8 0 112 9.73a.75.75 0 011.5.05 6.5 6.5 0 101.57-4.03l-.2.25h2.38l.1.01a.75.75 0 010 1.49H3.15a.75.75 0 01-.64-.64V2.66c.04-.34.3-.6.64-.65h.2c.34.05.6.3.65.64v2.06a7.98 7.98 0 015.37-2.68z"/>
    </svg>);
}
export default ArrowCounterclockwiseIcon;
