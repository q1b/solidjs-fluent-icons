import { splitProps } from "solid-js";
function PiIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.4 4.78c-.17.32-.18.76-.12 1.07a.75.75 0 11-1.47.3c-.1-.52-.11-1.34.26-2.06.41-.79 1.22-1.34 2.47-1.34H16.5a.75.75 0 010 1.5h-2.25v9.42c0 1.5.45 1.89.7 2 .32.15.8.08 1.21-.13a.75.75 0 01.68 1.34c-.6.3-1.6.58-2.53.15-1.01-.47-1.56-1.61-1.56-3.36V4.25H8.24a90.75 90.75 0 01-.6 6.32 44.66 44.66 0 01-.61 3.55 12.38 12.38 0 01-.86 2.72.75.75 0 11-1.34-.68c.26-.5.5-1.33.73-2.36.23-1.03.42-2.21.58-3.42.31-2.28.5-4.62.6-6.13h-2.2c-.74 0-1.01.28-1.14.53z"/>
    </svg>);
}
export default PiIcon;
