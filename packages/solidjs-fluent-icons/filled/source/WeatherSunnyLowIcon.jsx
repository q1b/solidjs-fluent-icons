import { splitProps } from "solid-js";
function WeatherSunnyLowIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.66 11a4.5 4.5 0 014.38-5.47A4.48 4.48 0 0114.4 11h3.09a.5.5 0 010 1h-15a.5.5 0 010-1h3.16zm4.47 7a.5.5 0 01-.21 0h.21zM5.08 4.38L5 4.32a.5.5 0 00-.64.77l.86.86.07.05a.5.5 0 00.63-.76l-.85-.86zm10.66.64a.5.5 0 00-.77-.64l-.85.86-.06.07a.5.5 0 00.76.64l.86-.86.06-.07zm-5.22-2.59a.5.5 0 00-1 .1v1.2l.02.1a.5.5 0 00.99-.1v-1.2l-.01-.1zM8.5 16a.5.5 0 000 1h3a.5.5 0 000-1h-3zM5 14c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 015 14z"/>
    </svg>);
}
export default WeatherSunnyLowIcon;
