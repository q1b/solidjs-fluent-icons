import { splitProps } from "solid-js";
function ChatWarningIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a8 8 0 11-3.61 15.14l-.12-.07-3.65.92a.5.5 0 01-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 01-.83-2.9l-.02-.37L2 10a8 8 0 018-8zm0 1a7 7 0 00-6.1 10.42.5.5 0 01.06.28l-.02.1-.75 3.01 3.02-.75a.5.5 0 01.19-.01l.09.02.09.04A7 7 0 1010 3zm0 2.5c.28 0 .5.22.5.5v5.5a.5.5 0 01-1 0V6c0-.28.22-.5.5-.5zm0 9a.75.75 0 100-1.5.75.75 0 000 1.5z"/>
    </svg>);
}
export default ChatWarningIcon;
