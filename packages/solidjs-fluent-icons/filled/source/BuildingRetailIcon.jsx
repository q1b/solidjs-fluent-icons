import { splitProps } from "solid-js";
function BuildingRetailIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 10V8h8v2H6zm6 4v-1h2v1h-2zm6-9.5c0 .65-.42 1.2-1 1.41V16.5a.5.5 0 01-.5.5H10v-4.5a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5V17H3.5a.5.5 0 01-.5-.5V5.91A1.5 1.5 0 013.5 3h13c.83 0 1.5.67 1.5 1.5zm-15 0c0 .28.22.5.5.5h13a.5.5 0 000-1h-13a.5.5 0 00-.5.5zM5.5 7a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h9a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-9zm6 5a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-3zM6 17h3v-4H6v4z"/>
    </svg>);
}
export default BuildingRetailIcon;
