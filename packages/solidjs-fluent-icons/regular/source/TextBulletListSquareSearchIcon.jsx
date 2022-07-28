import { splitProps } from "solid-js";
function TextBulletListSquareSearchIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.12 16H15a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v4.26c-.35.12-.69.29-1 .5V5c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2h-3.88l-1-1zM6.75 8a.75.75 0 100-1.5.75.75 0 000 1.5zM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm4.5 3.5H9.97a4.5 4.5 0 000-1h3.53a.5.5 0 010 1zM2.38 11.9a3.5 3.5 0 005.22 4.4l2.54 2.56a.5.5 0 00.71-.71L8.3 15.6a3.5 3.5 0 10-5.92-3.7zm5.2.21a2.5 2.5 0 11-4.16 2.78 2.5 2.5 0 014.16-2.78z"/>
    </svg>);
}
export default TextBulletListSquareSearchIcon;
