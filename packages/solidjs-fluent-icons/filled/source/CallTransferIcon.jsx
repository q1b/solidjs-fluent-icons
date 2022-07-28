import { splitProps } from "solid-js";
function CallTransferIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3.55 2.44a4.1 4.1 0 012.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 01-.67 3.24l-.6.45c-.28.22-.4.52-.34.77.18.82.59 1.57 1.15 2.13.17.16.47.22.8.1l.66-.26a2.5 2.5 0 013.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 01-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 01-2.03-7.06 2.87 2.87 0 011.51-2.5zM12 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm.5-.5a.5.5 0 100-1 .5.5 0 000 1zM14 6.5a.5.5 0 11-1 0 .5.5 0 011 0zm3 1a.5.5 0 001 0v-5a.5.5 0 00-.5-.5h-5a.5.5 0 000 1h3.8l-2.15 2.15a.5.5 0 00.7.7L17 3.71V7.5z"/>
    </svg>);
}
export default CallTransferIcon;
