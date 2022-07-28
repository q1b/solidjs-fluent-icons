import { splitProps } from "solid-js";
function CameraOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.5 4.2L2.15 2.86a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-.95-.95c-.22.07-.46.1-.7.1h-11A2.5 2.5 0 012 14.5v-8c0-1.02.62-1.9 1.5-2.3zM15.3 16l-2.85-2.84a4 4 0 01-5.61-5.61L4.31 5c-.74.1-1.3.73-1.3 1.49v8c0 .83.67 1.5 1.5 1.5h10.78zm-3.56-3.55L7.55 8.26a3 3 0 004.18 4.18zm-3.3-6.13l.78.78a3 3 0 013.68 3.68l.78.78A3.99 3.99 0 0010 6c-.55 0-1.08.11-1.56.32zM17 14.5c0 .12 0 .23-.03.34l.77.78c.17-.34.26-.72.26-1.12v-8A2.5 2.5 0 0015.5 4h-1.69l-.58-1.17A1.5 1.5 0 0011.89 2H8.12a1.5 1.5 0 00-1.34.83L6.2 4h-.07l.79.79a.5.5 0 00.04-.07l.73-1.44A.5.5 0 018.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 00.45.28h2c.82 0 1.5.67 1.5 1.5v8z"/>
    </svg>);
}
export default CameraOffIcon;
