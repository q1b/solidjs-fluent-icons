import { splitProps } from "solid-js";
function TreeEvergreenIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.62 2.21a1 1 0 00-1.24 0l-3.3 2.61a1.5 1.5 0 00-.06 2.32l-1.47 1.2a1.5 1.5 0 00.51 2.6l-1.58 1.48A1.49 1.49 0 004.49 15H8v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h3.5c1.36 0 2-1.65 1.02-2.58l-1.58-1.48a1.5 1.5 0 00.5-2.6L14 7.14a1.5 1.5 0 00-.06-2.32l-3.31-2.6zM9 15h2v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 01-.25-.25V15z"/>
    </svg>);
}
export default TreeEvergreenIcon;
