import { splitProps } from "solid-js";
function TemperatureIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.75 7.25a.75.75 0 00-1.5 0v4.9a2 2 0 101.5 0v-4.9zM6.5 5.5a3.5 3.5 0 017 0v5.67A4.48 4.48 0 0110 18.5a4.5 4.5 0 01-3.5-7.33V5.5zm1.5 0v6.24l-.2.22a3 3 0 104.4 0l-.2-.22V5.5a2 2 0 00-4 0z"/>
    </svg>);
}
export default TemperatureIcon;
