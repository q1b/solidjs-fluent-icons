import { splitProps } from "solid-js";
function BuildingRetailMoreIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 3.3a1 1 0 01.7-.3h10.6a1 1 0 01.7.3l2.64 2.63c.76.77.22 2.07-.85 2.07H2.2a1.21 1.21 0 01-.85-2.07L4 3.3zM17 9H3v6c0 1.1.9 2 2 2h10a2 2 0 002-2V9zM7 13a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2zm3 0a1 1 0 110-2 1 1 0 010 2z"/>
    </svg>);
}
export default BuildingRetailMoreIcon;
