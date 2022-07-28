import { splitProps } from "solid-js";
function ArrowSortUpIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.75 3c.23 0 .45.1.59.28l2.94 2.94a.75.75 0 01-1.06 1.06L10.5 5.57v10.68a.75.75 0 01-1.5 0V5.55L7.28 7.3a.75.75 0 11-1.06-1.06l3-3.01A.73.73 0 019.75 3z"/>
    </svg>);
}
export default ArrowSortUpIcon;
