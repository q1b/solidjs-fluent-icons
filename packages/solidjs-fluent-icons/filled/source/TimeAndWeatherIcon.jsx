import { splitProps } from "solid-js";
function TimeAndWeatherIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 2.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm-5 7.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM10 8.5a.5.5 0 00-1 0v2c0 .28.22.5.5.5H11a.5.5 0 000-1h-1V8.5zm0 7.5c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zM2.5 9.5a.5.5 0 000 1h1a.5.5 0 000-1h-1zM16 10c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM4.15 15.15a.5.5 0 00.7.7l1-1a.5.5 0 00-.7-.7l-1 1zm10-10l1-1a.5.5 0 01.7.7l-1 1a.5.5 0 01-.7-.7zm-9.3-1a.5.5 0 10-.7.7l1 1a.5.5 0 10.7-.7l-1-1zm10 10l1 1a.5.5 0 01-.7.7l-1-1a.5.5 0 01.7-.7z"/>
    </svg>);
}
export default TimeAndWeatherIcon;
