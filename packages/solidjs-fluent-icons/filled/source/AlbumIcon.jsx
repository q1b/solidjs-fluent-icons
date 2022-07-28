import { splitProps } from "solid-js";
function AlbumIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 6c0-1.1.9-2 2-2v12a2 2 0 01-2-2V6zm7 2.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-1zM5 16V4h11a2 2 0 012 2v8a2 2 0 01-2 2H5zm4.5-9C8.67 7 8 7.67 8 8.5v1c0 .83.67 1.5 1.5 1.5h4c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-4z"/>
    </svg>);
}
export default AlbumIcon;
