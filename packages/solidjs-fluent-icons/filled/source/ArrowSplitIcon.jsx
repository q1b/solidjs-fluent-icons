import { splitProps } from "solid-js";
function ArrowSplitIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 3c.41 0 .75.34.75.75V8H13a2 2 0 012 2v4.44l1.22-1.22a.75.75 0 111.06 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06l1.22 1.22V10a.5.5 0 00-.5-.5H7a.5.5 0 00-.5.5v4.44l1.22-1.22a.75.75 0 011.06 1.06l-2.5 2.5a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06L5 14.44V10c0-1.1.9-2 2-2h2.25V3.75c0-.41.34-.75.75-.75z"/>
    </svg>);
}
export default ArrowSplitIcon;
