import { splitProps } from "solid-js";
function BuildingRetailMoreIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7 13a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 11-2 0 1 1 0 012 0zm2 1a1 1 0 100-2 1 1 0 000 2zM4 3.3a1 1 0 01.7-.3h10.6a1 1 0 01.7.3l2.64 2.63c.76.77.22 2.07-.85 2.07H17v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8h-.79a1.21 1.21 0 01-.85-2.07L4 3.3zM16 15V8H4v7a1 1 0 001 1h10a1 1 0 001-1zm1.79-8c.18 0 .28-.23.14-.36L15.3 4H4.71L2.07 6.64A.21.21 0 002.2 7H17.8z"/>
    </svg>);
}
export default BuildingRetailMoreIcon;
