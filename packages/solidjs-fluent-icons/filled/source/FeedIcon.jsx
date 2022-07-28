import { splitProps } from "solid-js";
function FeedIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.47 17H4a2 2 0 01-2-2V4.5C2 3.67 2.67 3 3.5 3h7c.83 0 1.5.67 1.5 1.5V6h4.48c.77.02 1.52.6 1.52 1.58v4.92c0 .83-.67 1.5-1.5 1.5h-2.1l-.43 1.82c-.19.82-.85 1.2-1.5 1.18zM15 7H12v8.48c0 .6.86.7 1 .12l1.94-8.37.07-.23zM5.5 7a.5.5 0 100-1 .5.5 0 000 1zM5 10c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5zm0 3.5c0 .28.22.5.5.5h3a.5.5 0 000-1h-3a.5.5 0 00-.5.5z"/>
    </svg>);
}
export default FeedIcon;
