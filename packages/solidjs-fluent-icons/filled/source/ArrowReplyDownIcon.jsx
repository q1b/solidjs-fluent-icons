import { splitProps } from "solid-js";
function ArrowReplyDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.31 10.5l2.96-2.96A.75.75 0 006.3 6.4l-.09.07-4.24 4.25a.75.75 0 00-.07.97l.07.09 4.24 4.24a.75.75 0 001.14-.98l-.08-.08L4.31 12H10c4.2 0 7.62-3.34 7.75-7.5v-.25a.75.75 0 00-1.5 0 6.25 6.25 0 01-6.02 6.24H4.3l2.96-2.95-2.96 2.96z"/>
    </svg>);
}
export default ArrowReplyDownIcon;
