import { splitProps } from "solid-js";
function ImageSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.5 8a.5.5 0 100-1 .5.5 0 000 1zM3 6a3 3 0 013-3h8a3 3 0 013 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 00-1.7-.28A4.5 4.5 0 003 8.76V6zm9.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-.59 8H14c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 00-.58-.09 4.5 4.5 0 01-.2 3.38l2 2c.15.16.27.36.34.56zm-3.6-2.4a3.5 3.5 0 10-.7.7l2.54 2.55a.5.5 0 00.7-.7L8.3 14.6zM5.5 15a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    </svg>);
}
export default ImageSearchIcon;
