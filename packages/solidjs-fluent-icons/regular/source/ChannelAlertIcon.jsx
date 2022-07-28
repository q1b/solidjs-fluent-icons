import { splitProps } from "solid-js";
function ChannelAlertIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 4.5c-.1 0-.2 0-.3.02A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1c-.32-.16-.65-.3-1-.4V5.5c0-.83-.67-1.5-1.5-1.5h-9c-.51 0-.97.26-1.24.65a2 2 0 00-.76-.15zM9.2 16c.1.35.24.68.4 1H5.5A2.5 2.5 0 013 14.5V8.44a2 2 0 001 0v6.06c0 .83.67 1.5 1.5 1.5h3.7zm.4-4c.18-.36.4-.7.66-1H7.5a.5.5 0 000 1h2.1zM3.5 5.5a1 1 0 00-1 1 1 1 0 101-1zm4 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM16.5 13a2 2 0 10-4 0v1.8l-.35.35a.5.5 0 00.35.85h4a.5.5 0 00.35-.85l-.35-.36V13zm-3.41 4a1.5 1.5 0 002.82 0H13.1z"/>
    </svg>);
}
export default ChannelAlertIcon;
