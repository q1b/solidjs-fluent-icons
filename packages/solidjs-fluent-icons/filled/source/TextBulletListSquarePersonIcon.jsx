import { splitProps } from "solid-js";
function TextBulletListSquarePersonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h5.2c-.24-.76-.34-1.7.1-2.4.13-.24.31-.44.52-.6H9.5a.5.5 0 010-1h2.9a2.87 2.87 0 01-.36-2H9.5a.5.5 0 010-1h2.88c.5-.9 1.47-1.5 2.62-1.5.5 0 1 .1 1.5.4.18.1.35.22.5.36V5a2 2 0 00-2-2H5zm2.5 4.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6.75 11a.75.75 0 110-1.5.75.75 0 010 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.5 7h4a.5.5 0 010 1h-4a.5.5 0 010-1zM16 9.77a2 2 0 10-2 3.46 2 2 0 002-3.46zm-5 5.98c0-.69.56-1.25 1.25-1.25h5.5A1.25 1.25 0 0119 15.84v.21a2.03 2.03 0 01-.07.45c-.06.29-.2.66-.46 1.04C17.93 18.32 16.9 19 15 19c-1.61 0-2.6-.5-3.2-1.13a2.94 2.94 0 01-.8-1.82v-.3z"/>
    </svg>);
}
export default TextBulletListSquarePersonIcon;
