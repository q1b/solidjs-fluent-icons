import { splitProps } from "solid-js";
function HeadsetVrIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V5h2.75a3.25 3.25 0 013.24 3h.51c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5H18v1.75c0 1.8-1.46 3.25-3.25 3.25h-1.61c-.86 0-1.7-.34-2.3-.95l-.6-.6a.35.35 0 00-.49 0l-.6.6c-.6.6-1.43.95-2.3.95h-1.6A3.25 3.25 0 012 13.75V12h-.5a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5H2c.14-1.68 1.54-3 3.25-3H8V3.5zm2 5.25a.75.75 0 100-1.5.75.75 0 000 1.5zM5 10.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zm7.5-.5a.5.5 0 000 1h2a.5.5 0 000-1h-2z"/>
    </svg>);
}
export default HeadsetVrIcon;
