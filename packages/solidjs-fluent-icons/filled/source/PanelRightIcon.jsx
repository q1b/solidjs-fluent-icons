import { splitProps } from "solid-js";
function PanelRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12zm-4 11V5H4a1 1 0 00-1 1v8a1 1 0 001 1h8z"/>
    </svg>);
}
export default PanelRightIcon;
