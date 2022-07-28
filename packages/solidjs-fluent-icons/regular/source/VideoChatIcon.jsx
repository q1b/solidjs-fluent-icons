import { splitProps } from "solid-js";
function VideoChatIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 3A2.5 2.5 0 003 5.5v3.1c.32-.16.65-.3 1-.4V5.5C4 4.67 4.67 4 5.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-1.52c-.03.34-.1.68-.19 1h1.71a2.5 2.5 0 002.5-2.5v-1l2.4 1.8a1 1 0 001.6-.8v-7a1 1 0 00-1.6-.8L15 6.5v-1A2.5 2.5 0 0012.5 3h-7zM15 7.75l3-2.25v7l-3-2.25v-2.5zM5.5 18a4.5 4.5 0 10-3.94-2.32l-.54 1.8c-.1.3.2.6.5.5l1.8-.54c.64.36 1.39.56 2.18.56zM3 12.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 010-1h2a.5.5 0 010 1h-2z"/>
    </svg>);
}
export default VideoChatIcon;
