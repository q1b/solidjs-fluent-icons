import { splitProps } from "solid-js";
function AlignSpaceEvenlyHorizontalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 16a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1a2 2 0 012 2v8a2 2 0 01-2 2H3zm-1-2a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-1-1H3a1 1 0 00-1 1v8zm7 2a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1a2 2 0 012 2v8a2 2 0 01-2 2H9zm-1-2a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-1-1H9a1 1 0 00-1 1v8zm7 2a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1a2 2 0 012 2v8a2 2 0 01-2 2h-1zm-1-2a1 1 0 001 1h1a1 1 0 001-1V6a1 1 0 00-1-1h-1a1 1 0 00-1 1v8z"/>
    </svg>);
}
export default AlignSpaceEvenlyHorizontalIcon;
