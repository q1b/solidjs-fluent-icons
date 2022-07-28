import { splitProps } from "solid-js";
function FlashOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.86 12.56l5.29 5.3a.5.5 0 00.7-.71l-15-15a.5.5 0 10-.7.7l3.12 3.13-1.33 4.66c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l5-5.12zm3.67-3.74l-2.27 2.32L5.9 3.78l.29-1C6.32 2.3 6.74 2 7.21 2h5.25c.73 0 1.24.71 1 1.4L12.2 7h2.57c.94 0 1.4 1.14.76 1.81z"/>
    </svg>);
}
export default FlashOffIcon;
