import { splitProps } from "solid-js";
function EngineIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 2.5c.28 0 .5.22.5.5v1h2V3a.5.5 0 011 0v1h2.2a1 1 0 01.89.55L14.8 6H16a2 2 0 012 2v5a2 2 0 01-2 2h-1.2l-.71 1.45a1 1 0 01-.9.55H7.71a1 1 0 01-.71-.3l-2.41-2.4A2 2 0 014 12.87V10H3v2.5a.5.5 0 01-1 0v-6a.5.5 0 011 0V9h1V6c0-1.1.9-2 2-2h1V3c0-.28.22-.5.5-.5zm0 4.5a.5.5 0 00-.5.5V10c0 1.1.9 2 2 2h5.5a.5.5 0 000-1H11V7.5a.5.5 0 00-1 0V11H9a1 1 0 01-1-1V7.5a.5.5 0 00-.5-.5z"/>
    </svg>);
}
export default EngineIcon;
