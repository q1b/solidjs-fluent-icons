import { splitProps } from "solid-js";
function ArrowReplyIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.31 9.5l2.96 2.96a.75.75 0 01-.97 1.14l-.09-.08-4.24-4.24a.75.75 0 01-.07-.98l.07-.08 4.24-4.24a.75.75 0 011.14.97l-.08.09L4.31 8H10c4.2 0 7.62 3.34 7.75 7.5v.25a.75.75 0 01-1.5 0 6.25 6.25 0 00-6.02-6.25H4.3l2.96 2.96L4.31 9.5z"/>
    </svg>);
}
export default ArrowReplyIcon;
