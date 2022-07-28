import { splitProps } from "solid-js";
function PositionToFrontIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M1 3c0-1.1.9-2 2-2h3a2 2 0 012 2v1h-.5c-.17 0-.34.01-.5.04V3a1 1 0 00-1-1H3a1 1 0 00-1 1v3a1 1 0 001 1h1.04C4 7.16 4 7.33 4 7.5V8H3a2 2 0 01-2-2V3zm11 13v1c0 1.1.9 2 2 2h3a2 2 0 002-2v-3a2 2 0 00-2-2h-1v.5c0 .17-.01.34-.04.5H17a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1.04c-.16.03-.33.04-.5.04H12zM5 7.5A2.5 2.5 0 017.5 5h5A2.5 2.5 0 0115 7.5v5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 015 12.5v-5z"/>
    </svg>);
}
export default PositionToFrontIcon;
