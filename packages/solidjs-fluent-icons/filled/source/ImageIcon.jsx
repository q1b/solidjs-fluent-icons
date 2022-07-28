import { splitProps } from "solid-js";
function ImageIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8c0 .65.2 1.25.56 1.74l5.39-5.3a1.5 1.5 0 012.1 0l5.4 5.3c.34-.49.55-1.1.55-1.74V6a3 3 0 00-3-3H6zm0 14c-.65 0-1.24-.2-1.73-.55l5.38-5.3c.2-.2.5-.2.7 0l5.38 5.3c-.49.35-1.08.55-1.73.55H6zm6.5-8.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
    </svg>);
}
export default ImageIcon;
