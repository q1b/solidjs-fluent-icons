import { splitProps } from "solid-js";
function PlugConnectedAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.78 3.28a.75.75 0 00-1.06-1.06l-2.45 2.45a4.04 4.04 0 00-5.12.48l-.3.3a1.49 1.49 0 000 2.1l2.46 2.47a5.48 5.48 0 014.55-.85 4.04 4.04 0 00-.53-3.44l2.45-2.45zM7.55 8.85l2.47 2.46a5.48 5.48 0 00-.85 4.55 4.04 4.04 0 01-3.44-.53l-2.45 2.45a.75.75 0 01-1.06-1.06l2.45-2.45a4.04 4.04 0 01.48-5.12l.3-.3a1.49 1.49 0 012.1 0zm9.45 9.4a4.5 4.5 0 11-5-7.5 4.5 4.5 0 015 7.5zm-2.15-6.1a.5.5 0 00-.85.35V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5a.5.5 0 00-.15-.35z"/>
    </svg>);
}
export default PlugConnectedAddIcon;
