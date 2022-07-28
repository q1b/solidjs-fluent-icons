import { splitProps } from "solid-js";
function SlideMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a4 4 0 00-4 4v5c0 1.1.9 2 2 2V8a3 3 0 013-3h8a2 2 0 00-2-2H6zm1 3a2 2 0 00-2 2v7c0 1.1.9 2 2 2h9a2 2 0 002-2V8a2 2 0 00-2-2H7z"/>
    </svg>);
}
export default SlideMultipleIcon;
