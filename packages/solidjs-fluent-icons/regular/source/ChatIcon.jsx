import { splitProps } from "solid-js";
function ChatIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a8 8 0 11-3.61 15.14l-.12-.07-3.65.92a.5.5 0 01-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 01-.83-2.9l-.02-.37L2 10a8 8 0 018-8zm0 1a7 7 0 00-6.1 10.42.5.5 0 01.06.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 01.19-.01l.09.02.09.04A7 7 0 1010 3zm.5 8a.5.5 0 01.09 1H7.5a.5.5 0 01-.09-1h3.09zm2-3a.5.5 0 01.09 1H7.5a.5.5 0 01-.09-1h5.09z"/>
    </svg>);
}
export default ChatIcon;