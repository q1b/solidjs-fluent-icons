import { splitProps } from "solid-js";
function ImageArrowBackIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 018 7.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75H3.71l.9.9a.5.5 0 11-.71.7L2.14 5.35a.5.5 0 010-.7L3.9 2.9a.5.5 0 11.7.7zM3 10.4c.32.16.65.3 1 .4V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 012.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 00-2-2h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3v-3.6zm11-2.9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0zm-8.01 8.23A2 2 0 006 16h8a2 2 0 001.01-.27l-4.66-4.58a.5.5 0 00-.7 0l-4.66 4.58z"/>
    </svg>);
}
export default ImageArrowBackIcon;
