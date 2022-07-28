import { splitProps } from "solid-js";
function ImageArrowBackIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 018 7.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75H3.71l.9.9a.5.5 0 11-.71.7L2.14 5.35a.5.5 0 010-.7L3.9 2.9a.5.5 0 11.7.7zM11 5.5a5.5 5.5 0 01-8 4.9V14c0 .65.2 1.25.56 1.74l5.39-5.3a1.5 1.5 0 012.1 0l5.4 5.3c.34-.49.55-1.1.55-1.74V6a3 3 0 00-3-3h-3.6c.38.75.6 1.6.6 2.5zM12.5 8a.5.5 0 100-1 .5.5 0 000 1zm0 1a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 00-.7 0l-5.38 5.3z"/>
    </svg>);
}
export default ImageArrowBackIcon;
