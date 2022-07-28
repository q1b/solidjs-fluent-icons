import { splitProps } from "solid-js";
function PersonChatIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a4 4 0 100 8 4 4 0 000-8zm-5 9a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8a8.54 8.54 0 004 1.17l.36-1.2a5.48 5.48 0 01.77-5.77H5zm14 3.5a4.5 4.5 0 01-6.68 3.94l-1.8.54a.4.4 0 01-.5-.5l.54-1.8A4.5 4.5 0 1119 14.5zM12.5 13a.5.5 0 000 1h4a.5.5 0 000-1h-4zm-.5 2.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default PersonChatIcon;
