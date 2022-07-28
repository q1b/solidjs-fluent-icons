import { splitProps } from "solid-js";
function ScratchpadIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5H12v-.7A5.5 5.5 0 018 12H6.5a.5.5 0 010-1h1.59c.2-.58.76-1 1.41-1v-.5h-3a.5.5 0 010-1h3c0-.53.1-1.04.3-1.5H6.5a.5.5 0 010-1h3.88a4 4 0 016.62.56V3.5c0-.83-.67-1.5-1.5-1.5h-11zm9 3.5a3 3 0 00-3 3v3a3 3 0 106 0v-3a3 3 0 00-3-3zm-4 5.5c.28 0 .5.22.5.5v.5a3.5 3.5 0 107 0v-.5a.5.5 0 011 0v.5a4.5 4.5 0 01-4 4.47V18a.5.5 0 01-1 0v-1.53A4.5 4.5 0 019 12v-.5c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default ScratchpadIcon;
