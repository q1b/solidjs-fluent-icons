import { splitProps } from "solid-js";
function RadarCheckmarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.5 3.38l-.72.72A7 7 0 003 9.6c-.36.18-.7.4-1 .65a8 8 0 0112.5-6.87zM9.75 18c.25-.31.47-.65.66-1.01a6.97 6.97 0 004.54-2.04.5.5 0 01.7.7A7.98 7.98 0 019.76 18zM11 14.5l-.01.4a4.98 4.98 0 002.55-1.36.5.5 0 10-.71-.71c-.54.53-1.18.88-1.86 1.05.02.2.03.41.03.62zM5.5 9l.62.03a3.98 3.98 0 015.44-2.71l.75-.75A5 5 0 005.1 9L5.5 9zm3.54 1.3c.24.2.46.42.67.66a1 1 0 001.26-1.22l4.88-4.89a.5.5 0 00-.7-.7l-4.9 4.88a1 1 0 00-1.2 1.26zM17 13.5a.5.5 0 11-1 0 .5.5 0 011 0zM16.5 7a.5.5 0 100-1 .5.5 0 000 1zm1.5 4.25a.5.5 0 11-1 0 .5.5 0 011 0zm-.5-2a.5.5 0 100-1 .5.5 0 000 1zm-2.5 2a.5.5 0 11-1 0 .5.5 0 011 0zm-.5-2a.5.5 0 100-1 .5.5 0 000 1zM10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L4.5 15.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z"/>
    </svg>);
}
export default RadarCheckmarkIcon;
