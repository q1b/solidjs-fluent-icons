import { splitProps } from "solid-js";
function PageFitIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 6C4.67 6 4 6.67 4 7.5v1a.5.5 0 001 0v-1c0-.28.22-.5.5-.5h1a.5.5 0 000-1h-1zm8 0a.5.5 0 000 1h1c.28 0 .5.22.5.5v1a.5.5 0 001 0v-1c0-.83-.67-1.5-1.5-1.5h-1zM5 11.5a.5.5 0 00-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 000-1h-1a.5.5 0 01-.5-.5v-1zm11 0a.5.5 0 00-1 0v1a.5.5 0 01-.5.5h-1a.5.5 0 000 1h1c.83 0 1.5-.67 1.5-1.5v-1zM2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm1 0v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1zm2.5 0C4.67 6 4 6.67 4 7.5v1a.5.5 0 001 0v-1c0-.28.22-.5.5-.5h1a.5.5 0 000-1h-1zM5 11.5a.5.5 0 00-1 0v1c0 .83.67 1.5 1.5 1.5h1a.5.5 0 000-1h-1a.5.5 0 01-.5-.5v-1z"/>
    </svg>);
}
export default PageFitIcon;
