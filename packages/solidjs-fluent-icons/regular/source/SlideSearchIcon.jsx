import { splitProps } from "solid-js";
function SlideSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.5 7a.5.5 0 000 1h6a.5.5 0 000-1h-6zm3.03 3.5a4.5 4.5 0 00-.68-1h6.65a.5.5 0 010 1H8.53zm.47 2c0 .17 0 .34-.03.5h3.53a.5.5 0 000-1H8.97c.02.16.03.33.03.5zm-6-6v1.76c-.36.12-.7.3-1 .5V6.5A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v7a2.5 2.5 0 01-2.5 2.5h-5.38l-1-1h6.38c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-11C3.67 5 3 5.67 3 6.5zM4.5 16c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L7.3 14.6A3.5 3.5 0 104.5 16zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
    </svg>);
}
export default SlideSearchIcon;
