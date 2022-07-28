import { splitProps } from "solid-js";
function WeatherMoonOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l6.6 6.61-.03.07c-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 00-.3.9 7.98 7.98 0 0012.14 1.19l2.14 2.13a.5.5 0 00.7-.7l-2.16-2.17-6.5-6.5-6.34-6.33zM16.35 14l-.08.15-6.78-6.78c.27-1.32.21-2.8-.22-4.6a.6.6 0 01.61-.73A7.98 7.98 0 0116.36 14z"/>
    </svg>);
}
export default WeatherMoonOffIcon;
