import { splitProps } from "solid-js";
function TagDismissIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M18 4.03a2 2 0 00-1.98-2L11.12 2a2 2 0 00-1.42.59L3.02 9.25a2 2 0 000 2.83l4.95 4.95a2 2 0 001.95.51 5.5 5.5 0 017.8-7.5 2 2 0 00.3-1.06L18 4.03zM14 7a1 1 0 110-2 1 1 0 010 2zm5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z"/>
    </svg>);
}
export default TagDismissIcon;
