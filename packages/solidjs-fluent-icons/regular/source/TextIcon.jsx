import { splitProps } from "solid-js";
function TextIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 2.5c0-.28.22-.5.5-.5h6c.28 0 .5.22.5.5V4a.5.5 0 01-1 0V3H6v6h.5a.5.5 0 010 1h-2a.5.5 0 010-1H5V3H3v1a.5.5 0 01-1 0V2.5z"/>
    </svg>);
}
export default TextIcon;
