import { splitProps } from "solid-js";
function TextBulletListSquareClockIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 9.2V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h4.2c.1.35.24.68.4 1H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h10a2 2 0 012 2v4.6c-.32-.16-.65-.3-1-.4zM6.75 8a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5h1.84c-.4.28-.77.62-1.08 1H9.5a.5.5 0 01-.5-.5zm10 4a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z"/>
    </svg>);
}
export default TextBulletListSquareClockIcon;
