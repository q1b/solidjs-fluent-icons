import { splitProps } from "solid-js";
function ImageMultipleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.5 7.5a1 1 0 100-2 1 1 0 000 2zM3 6a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2v6c0 .37.1.72.28 1.02l3.3-3.31a2 2 0 012.83 0l3.31 3.3A2 2 0 0014 12V6a2 2 0 00-2-2H6zm3.7 6.41a1 1 0 00-1.4 0l-3.32 3.31A2 2 0 006 14h6a2 2 0 001.02-.28l-3.31-3.3zM8 17a3 3 0 01-2.24-1h6.74a3.5 3.5 0 003.5-3.5V5.76A3 3 0 0117 8v4.5a4.5 4.5 0 01-4.5 4.5H8z"/>
    </svg>);
}
export default ImageMultipleIcon;
