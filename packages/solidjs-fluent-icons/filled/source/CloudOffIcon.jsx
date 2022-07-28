import { splitProps } from "solid-js";
function CloudOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7l3.67 3.67c-.25.53-.4 1.11-.47 1.73h-.07A3.33 3.33 0 002 11.62 3.33 3.33 0 005.28 15h9.01l2.86 2.85a.5.5 0 00.7-.7l-15-15zM18 11.62a3.4 3.4 0 01-1.45 2.8l-9.5-9.48A4.66 4.66 0 0110 4c2.82 0 4.41 1.92 4.65 4.25h.07A3.33 3.33 0 0118 11.62z"/>
    </svg>);
}
export default CloudOffIcon;
