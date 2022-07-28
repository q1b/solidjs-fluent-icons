import { splitProps } from "solid-js";
function SurfaceHubIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.76 2.45a.5.5 0 01.5-.45H15.5a.5.5 0 01.5.55l-.76 8a.5.5 0 01-.5.45h-.66l.91 6.43a.5.5 0 01-.98.14L13.64 15h-2.28L11 17.57a.5.5 0 01-.98-.14l.34-2.43H7.36L7 17.57a.5.5 0 01-.98-.14L6.92 11H4.5a.5.5 0 01-.5-.55l.76-8zM7.51 14h2.98l.43-3H7.93l-.42 3zm4 0h1.98l-.42-3h-1.14l-.42 3zm2.78-4l.66-7H5.71l-.66 7h9.24z"/>
    </svg>);
}
export default SurfaceHubIcon;
