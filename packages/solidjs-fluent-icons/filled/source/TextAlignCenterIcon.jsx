import { splitProps } from "solid-js";
function TextAlignCenterIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 4.25c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 4.25zm-2 5c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.25zm4.75 4.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"/>
    </svg>);
}
export default TextAlignCenterIcon;
