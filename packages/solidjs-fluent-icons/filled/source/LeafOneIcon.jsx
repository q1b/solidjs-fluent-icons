import { splitProps } from "solid-js";
function LeafOneIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.07 2.46a1.5 1.5 0 00-2.14 0l-3.24 3.3a6.03 6.03 0 00.06 8.5v.01a5.98 5.98 0 003.75 1.74v1.49a.5.5 0 101 0V16c1.36-.1 2.7-.68 3.74-1.73h.01l.01-.02a6.03 6.03 0 00.05-8.48l-3.24-3.3zM10.5 15c-.33.03-.67.03-1 0V9.5a.5.5 0 111 0V15z"/>
    </svg>);
}
export default LeafOneIcon;
