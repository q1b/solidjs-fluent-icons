import { splitProps } from "solid-js";
function PanelLeftContractIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.82 10.5h3.68a.5.5 0 000-1h-3.68l1-.87a.5.5 0 10-.66-.76l-2 1.75a.5.5 0 000 .76l2 1.75a.5.5 0 10.66-.76l-1-.87zM4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm4 11V5h8a1 1 0 011 1v8a1 1 0 01-1 1H8z"/>
    </svg>);
}
export default PanelLeftContractIcon;
