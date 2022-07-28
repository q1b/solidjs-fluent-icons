import { splitProps } from "solid-js";
function TextIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 2.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0V3.5H6.5v5h.25a.75.75 0 010 1.5h-2a.75.75 0 010-1.5H5v-5H3.5v.75a.75.75 0 01-1.5 0v-1.5z"/>
    </svg>);
}
export default TextIcon;
