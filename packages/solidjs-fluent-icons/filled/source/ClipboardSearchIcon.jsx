import { splitProps } from "solid-js";
function ClipboardSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v3.76a4.5 4.5 0 015.56 6.18l2 2c.42.42.54 1.03.35 1.56h2.59c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zm3 1a.5.5 0 010 1h-3a.5.5 0 010-1h3zM8.3 14.6a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 00.7-.7L8.3 14.6zm-2.8.4a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    </svg>);
}
export default ClipboardSearchIcon;
