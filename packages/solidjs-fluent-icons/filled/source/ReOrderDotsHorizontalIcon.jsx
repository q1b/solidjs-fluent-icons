import { splitProps } from "solid-js";
function ReOrderDotsHorizontalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14 6.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-5 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM5.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm8.5 5.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM10.5 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM4 13.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"/>
    </svg>);
}
export default ReOrderDotsHorizontalIcon;
