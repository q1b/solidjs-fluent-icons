import { splitProps } from "solid-js";
function TextBulletListSquarePersonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16 8.66V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h5c.03.34.1.69.2 1H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h10a2 2 0 012 2v4.26a2.8 2.8 0 00-.5-.36c-.17-.1-.33-.18-.5-.24zM6.75 8a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5h2.88a3 3 0 00-.34 1H9.5a.5.5 0 01-.5-.5zm3.8 3a2.66 2.66 0 01-.4-.5H9.5a.5.5 0 000 1h1.32c.42-.32.95-.5 1.48-.5h.5zM16 9.77a2 2 0 10-2 3.46 2 2 0 002-3.46zm-5 5.98c0-.69.56-1.25 1.25-1.25h5.5A1.25 1.25 0 0119 15.84v.21a2.03 2.03 0 01-.07.45c-.06.29-.2.66-.46 1.04C17.93 18.32 16.9 19 15 19c-1.61 0-2.6-.5-3.2-1.13a2.94 2.94 0 01-.8-1.82v-.3z"/>
    </svg>);
}
export default TextBulletListSquarePersonIcon;
