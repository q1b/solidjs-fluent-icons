import { splitProps } from "solid-js";
function ZoomOutIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 8.5a5.5 5.5 0 10-2.18 4.38l4.15 4.15.08.07a.75.75 0 00.98-1.13l-4.15-4.15A5.48 5.48 0 0014 8.5zm-3-.75a.75.75 0 010 1.5H6a.75.75 0 010-1.5h5z"/>
    </svg>);
}
export default ZoomOutIcon;
