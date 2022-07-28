import { splitProps } from "solid-js";
function AlignSpaceEvenlyHorizontalIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 16a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1z"/>
  <path d="M10 16a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1z"/>
  <path d="M16 16a2 2 0 002-2V6a2 2 0 00-2-2h-1a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1z"/>
    </svg>);
}
export default AlignSpaceEvenlyHorizontalIcon;
