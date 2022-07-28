import { splitProps } from "solid-js";
function ClipboardTextLtrIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-12c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zm3 1a.5.5 0 010 1h-3a.5.5 0 010-1h3zm-5 5h7a.5.5 0 010 1h-7a.5.5 0 010-1zm0 3h3a.5.5 0 010 1h-3a.5.5 0 010-1zM6 14.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z"/>
    </svg>);
}
export default ClipboardTextLtrIcon;
