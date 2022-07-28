import { splitProps } from "solid-js";
function ArrowTurnBidirectionalDownRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.78 2.22a.75.75 0 10-1.06 1.06L15.44 6H9a3 3 0 00-3 3v6.44l-2.72-2.72a.75.75 0 00-1.06 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 10-1.06-1.06L7.5 15.44V9c0-.83.67-1.5 1.5-1.5h6.44l-2.72 2.72a.75.75 0 101.06 1.06l4-4c.3-.3.3-.77 0-1.06l-4-4z"/>
    </svg>);
}
export default ArrowTurnBidirectionalDownRightIcon;
