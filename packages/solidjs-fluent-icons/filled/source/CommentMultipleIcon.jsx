import { splitProps } from "solid-js";
function CommentMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.5 2a2.5 2.5 0 00-2.46 2.03C4.2 4 4.34 4 4.5 4h8A3.5 3.5 0 0116 7.5v5.45a2.5 2.5 0 002-2.45V6a4 4 0 00-4-4H6.5zm-2 3A2.5 2.5 0 002 7.5v6A2.5 2.5 0 004.5 16H5v1.03a1 1 0 001.58.81L9.16 16h3.34a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0012.5 5h-8z"/>
    </svg>);
}
export default CommentMultipleIcon;
