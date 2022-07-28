import { splitProps } from "solid-js";
function ArrowTurnRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.72 3.22c.3-.3.77-.3 1.06 0l4 4c.3.3.3.77 0 1.06l-4 4a.75.75 0 11-1.06-1.06l2.72-2.72H7c-.83 0-1.5.67-1.5 1.5v6.25a.75.75 0 01-1.5 0V10a3 3 0 013-3h6.44l-2.72-2.72a.75.75 0 010-1.06z"/>
    </svg>);
}
export default ArrowTurnRightIcon;
