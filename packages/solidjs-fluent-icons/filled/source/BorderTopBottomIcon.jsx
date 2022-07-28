import { splitProps } from "solid-js";
function BorderTopBottomIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 4.5a1.5 1.5 0 00-1.43 1.04.75.75 0 01-1.38-.58A3 3 0 016 3h8a3 3 0 012.81 1.96.75.75 0 01-1.38.58A1.5 1.5 0 0014 4.5H6zm-3 6.75a.75.75 0 001.5 0v-2.5a.75.75 0 00-1.5 0v2.5zm12.5 0a.75.75 0 001.5 0v-2.5a.75.75 0 00-1.5 0v2.5zm-10.9 3.3c.22.56.77.95 1.4.95h8a1.5 1.5 0 001.43-1.03v-.01a.75.75 0 011.38.58A3 3 0 0114 17H6a3 3 0 01-2.81-1.96.75.75 0 111.41-.49z"/>
    </svg>);
}
export default BorderTopBottomIcon;
