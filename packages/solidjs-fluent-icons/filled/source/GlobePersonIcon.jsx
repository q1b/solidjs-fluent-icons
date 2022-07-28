import { splitProps } from "solid-js";
function GlobePersonIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.99 4.18c-.28.66-.5 1.45-.67 2.32h5.36c-.17-.87-.4-1.66-.67-2.32-.3-.73-.65-1.3-1-1.66C10.64 2.15 10.3 2 10 2c-.3 0-.65.15-1 .52-.36.37-.71.93-1.01 1.66zm-.1-1.9c-.31.43-.59.94-.83 1.52-.32.78-.58 1.7-.76 2.7H2.8c1-2.05 2.85-3.6 5.1-4.22zm4.22 0c.31.43.59.94.83 1.52.32.78.58 1.7.76 2.7h3.5a8.02 8.02 0 00-5.09-4.22zm5.5 5.22h-3.76c.08.61.12 1.25.14 1.9a2.99 2.99 0 014 .93 8.26 8.26 0 00-.39-2.83zM13 10v.35a2.99 2.99 0 00-.46 2.15H7.16a19.44 19.44 0 010-5h5.68c.1.79.16 1.63.16 2.5zm-.32 3.5c-.04.24-.1.47-.15.7A2.5 2.5 0 0011 16.5c0 .29.04.58.12.86l-.12.12c-.35.37-.7.52-1 .52-.3 0-.65-.15-1-.52-.36-.37-.71-.93-1.01-1.66-.28-.66-.5-1.45-.67-2.32h5.36zM7.9 17.72A8.02 8.02 0 012.8 13.5h3.5c.18 1 .44 1.92.76 2.7.24.58.52 1.1.83 1.52zM2.4 12.5h3.76a20.52 20.52 0 010-5H2.4a8 8 0 000 5zM17.5 12a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z"/>
    </svg>);
}
export default GlobePersonIcon;
