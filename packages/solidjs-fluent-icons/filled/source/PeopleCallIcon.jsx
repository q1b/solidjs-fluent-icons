import { splitProps } from "solid-js";
function PeopleCallIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 5.75a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-11 1a2 2 0 00-2 2s0 4 5.25 4S12 12 12 12a2 2 0 00-2-2H3.5zm12.23.32l-.4.94-.03.1c-.12.4-.02.82.27 1.1l.88.83-.03.22a4.03 4.03 0 01-1.53 2.47l-1.05-.36-.1-.03a.95.95 0 00-.98.41l-.58.84-.05.1c-.22.4-.15.92.17 1.25l.38.39.1.09c.37.3.86.41 1.32.27 1.18-.37 2.26-1.46 3.25-3.28 1-1.82 1.34-3.36 1.05-4.63-.12-.53-.5-.95-1-1.11l-.5-.16-.1-.03a.96.96 0 00-1.07.6z"/>
    </svg>);
}
export default PeopleCallIcon;
