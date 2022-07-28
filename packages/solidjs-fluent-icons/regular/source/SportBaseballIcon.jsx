import { splitProps } from "solid-js";
function SportBaseballIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.61 5.53a6.99 6.99 0 0110.78 0c-.64.38-1.33.7-2.05.94a.5.5 0 00.32.95c.81-.27 1.59-.64 2.31-1.08a6.97 6.97 0 010 7.33c-.73-.44-1.5-.8-2.31-1.08a.5.5 0 00-.32.95c.72.24 1.4.56 2.04.94a6.99 6.99 0 01-10.76 0c.64-.38 1.32-.7 2.04-.94a.5.5 0 10-.32-.95c-.81.28-1.58.64-2.3 1.08a6.97 6.97 0 01-.01-7.33c.72.44 1.5.8 2.31 1.08a.5.5 0 00.32-.95c-.72-.24-1.4-.56-2.05-.94zM10 2a8 8 0 100 16 8 8 0 000-16zM8.57 6.92a10.6 10.6 0 002.86 0 .5.5 0 01.14.99 11.6 11.6 0 01-3.14 0 .5.5 0 01.14-1zm0 6.18a10.6 10.6 0 012.86 0 .5.5 0 00.14-1 11.6 11.6 0 00-3.14 0 .5.5 0 10.14 1z"/>
    </svg>);
}
export default SportBaseballIcon;
