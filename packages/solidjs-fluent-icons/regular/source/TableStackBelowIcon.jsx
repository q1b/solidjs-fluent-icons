import { splitProps } from "solid-js";
function TableStackBelowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17 16.5a.5.5 0 01-.5.5h-13a.5.5 0 010-1h13c.28 0 .5.22.5.5zm0-5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V5c0-1.1.9-2 2-2h10a2 2 0 012 2v6.5zM16 7V5a1 1 0 00-1-1h-2v3h3zM8 4v3h4V4H8zM7 4H5a1 1 0 00-1 1v2h3V4zm0 4H4v3h3V8zm1 3h4V8H8v3zm8 0V8h-3v3h3z"/>
    </svg>);
}
export default TableStackBelowIcon;
