import { splitProps } from "solid-js";
function PersonSupportIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.53 4a4 4 0 11-.14 3.72A1.5 1.5 0 015.5 8H5v.26c0 .19.07.36.2.5A.75.75 0 115.67 10 1.74 1.74 0 014 8.26V4.5c0-.28.23-.5.5-.5h2.03zM5 7h.5a.5.5 0 00.5-.5v-.37a4.08 4.08 0 010-.26V5H5v2zm-2 6a2 2 0 012-2h10a2 2 0 012 2c0 1.7-.83 2.97-2.13 3.8A9.14 9.14 0 0110 18a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 013 13z"/>
    </svg>);
}
export default PersonSupportIcon;
