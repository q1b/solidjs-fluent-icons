import { splitProps } from "solid-js";
function FlashCheckmarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.21 2c-.47 0-.89.31-1.02.77l-2.25 7.87c-.2.68.32 1.36 1.02 1.36h1.27l-1.17 4.68c-.26 1.05 1.04 1.78 1.8 1l2.21-2.27a5.5 5.5 0 016.22-6.35l.24-.24c.65-.68.18-1.82-.76-1.82H12.2l1.27-3.6c.23-.69-.28-1.4-1.01-1.4H7.21zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z"/>
    </svg>);
}
export default FlashCheckmarkIcon;
